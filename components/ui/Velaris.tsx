"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 position;
varying vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;
varying vec2 vUv;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_grain;
uniform vec3 u_colors[4];
uniform vec3 u_bg;

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
    dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  float ratio = u_resolution.x / u_resolution.y;
  vec2 p = uv - 0.5;
  p.x *= ratio;

  float t = u_time * 0.1;
  float n1 = snoise(p * 0.42 + vec2(t * 0.18, -t * 0.26));
  float n2 = snoise(p * 0.58 + vec2(-t * 0.14, t * 0.2) + n1 * 0.22);
  float n3 = snoise(p * 0.78 + vec2(t * 0.08, -t * 0.16) + n2 * 0.18);

  vec3 col = u_bg;
  float dist = length(p) * 1.45;
  float vignette = 1.0 - smoothstep(0.24, 1.22, dist);

  col = mix(col, u_colors[0], smoothstep(0.0, 0.62, n1) * 0.28);
  col = mix(col, u_colors[1], smoothstep(0.08, 0.68, n2) * 0.2);
  col = mix(col, u_colors[2], smoothstep(-0.05, 0.58, n3) * 0.14);
  col = mix(col, u_colors[3], smoothstep(0.18, 0.72, n1 * n2) * 0.12);

  float glow = smoothstep(0.9, 0.0, dist) * 0.08;
  col += u_colors[0] * glow;
  col = mix(col * 0.3, col, vignette);

  float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453 + u_time);
  col += (grain - 0.5) * u_grain * 0.06;

  gl_FragColor = vec4(col, 1.0);
}
`;

type VelarisProps = {
  background?: string;
  colors?: readonly string[];
  speed?: number;
  grain?: number;
  height?: string;
  className?: string;
  children?: ReactNode;
};

const defaultColors = ["#d8b78e", "#7d5d40", "#33241b", "#0a0a0a"] as const;

function hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace("#", "").padEnd(6, "0").slice(0, 6);
  return [
    Number.parseInt(value.slice(0, 2), 16) / 255,
    Number.parseInt(value.slice(2, 4), 16) / 255,
    Number.parseInt(value.slice(4, 6), 16) / 255,
  ];
}

export function Velaris({
  background = "#030303",
  colors = defaultColors,
  speed = 0.55,
  grain = 0.08,
  height = "100svh",
  className = "",
  children,
}: VelarisProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertex = compileShader(gl.VERTEX_SHADER, vertexShader);
    const fragment = compileShader(gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const grainLocation = gl.getUniformLocation(program, "u_grain");
    const colorsLocation = gl.getUniformLocation(program, "u_colors");
    const backgroundLocation = gl.getUniformLocation(program, "u_bg");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const palette = colors.slice(0, 4);
    while (palette.length < 4) palette.push(palette.at(-1) ?? background);
    const flatColors = new Float32Array(palette.flatMap(hexToRgb));
    const backgroundColor = hexToRgb(background);

    let frame = 0;
    let visible = true;
    let pageVisible = !document.hidden;

    const resize = () => {
      const dprLimit = window.innerWidth < 820 ? 1.15 : 1.5;
      const dpr = Math.min(window.devicePixelRatio || 1, dprLimit);
      const width = Math.max(1, Math.round(container.clientWidth * dpr));
      const heightPx = Math.max(1, Math.round(container.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== heightPx) {
        canvas.width = width;
        canvas.height = heightPx;
        gl.viewport(0, 0, width, heightPx);
      }
    };

    const draw = (time: number) => {
      resize();
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time * 0.001 * speed);
      gl.uniform1f(grainLocation, grain);
      gl.uniform3fv(colorsLocation, flatColors);
      gl.uniform3f(backgroundLocation, ...backgroundColor);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const render = (time: number) => {
      frame = 0;
      draw(time);
      if (!reducedMotion && visible && pageVisible) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const start = () => {
      if (!frame && visible && pageVisible) frame = window.requestAnimationFrame(render);
    };

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) draw(0);
    });
    resizeObserver.observe(container);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.01 },
    );
    visibilityObserver.observe(container);

    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
      if (pageVisible) start();
      else stop();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    if (reducedMotion) draw(0);
    else start();

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (buffer) gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, [background, colors, grain, speed]);

  const style = { "--velaris-height": height } as CSSProperties;

  return (
    <div
      ref={containerRef}
      className={`velaris ${className}`.trim()}
      style={style}
    >
      <canvas ref={canvasRef} className="velaris-canvas" aria-hidden="true" />
      <div className="velaris-content">{children}</div>
    </div>
  );
}
