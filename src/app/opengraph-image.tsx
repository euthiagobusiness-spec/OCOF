/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OCOF | Construimos operacoes de crescimento";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0B0B0B 0%, #666666 52%, #0B0B0B 100%)",
          color: "#F4F4F4",
          padding: 72,
          fontFamily: "Arial",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 42,
            border: "2px solid rgba(244, 244, 244, 0.28)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", width: 360, height: 126 }}>
            <img
              alt="OCOF"
              height={126}
              src="https://ocof.vercel.app/brand/ocof-logo-official-wordmark.png"
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              width={360}
            />
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#D8D8D8",
            }}
          >
            Ousadia * Constancia * Organizacao * Foco
          </div>
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 780,
          }}
        >
          <div
            style={{
              fontSize: 62,
              lineHeight: 1.02,
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            Construimos operacoes de crescimento.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#B8B8B8",
            }}
          >
            Estrategia. Execucao. Processos escalaveis.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
