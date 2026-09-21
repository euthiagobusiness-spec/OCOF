# OCOF — direção de frontend

## Visual thesis

Uma sala de operações editorial: tipografia precisa, grid visível e fluxos de crescimento em uma linguagem corporativa própria.

## Auditoria e estratégia

- O site anterior tinha boa presença institucional, mas era longo, excessivamente apoiado em fotos de agenda e pouco direto sobre a operação.
- A nova Home prioriza promessa, problema, sistema OCOF, método e diagnóstico, com conteúdo institucional reduzido.
- Cases, depoimentos, artigos e canais de contato aceitam somente dados reais validados; ausências ficam explicitamente marcadas no código.

## Sistema visual

- Paleta exclusiva: `#0E0E0E`, `#626262`, `#B4B4B4`, `#C0C0C0` e `#EDEDED`, amostrada da aparência monocromática da imagem fornecida. Sem cores adicionais, gradientes, transparências de cor ou sombras. Cores do modo de alto contraste do sistema permanecem respeitadas por acessibilidade.
- Tipografia: Archivo variável (títulos 750–900) e Manrope variável (textos 500 e interface 600–800). Arquivos servidos localmente por next/font, com licenças OFL em public/fonts.
- Espaçamento: escala de 4, 8, 12, 16, 24, 32, 48, 64, 96 e 144px, exposta em tokens CSS.
- Grid: container máximo de 1400px, 12 colunas no desktop e fluxo de uma coluna no mobile.
- Bordas: linhas sólidas e raios contidos, sem sombras. Header fixo opaco e monograma tipográfico substituindo a fotografia.
- Movimento: transformações de menu, links e acordeões; sem interpolação de cores. Respeita `prefers-reduced-motion`.

## Breakpoints

- Base mobile: 320–767px.
- Tablet: 768–1023px.
- Desktop: 1024–1439px.
- Large desktop: 1440px+.

## Princípios de componentes

- Seções com função comercial clara e composição própria, evitando grids repetidos de cards.
- Apenas o header é Client Component; todo o conteúdo permanece renderizado no servidor.
- Imagens têm dimensões reservadas; o hero é tipográfico e usa HTML/CSS para o diagrama operacional.
- Focus visível, navegação por teclado, headings em ordem, targets mínimos e suporte a zoom/reduced motion.

## Referências consultadas no Figma

Consulta em 20/09/2026 à [seleção oficial de exemplos](https://www.figma.com/resource-library/ai-website-examples/):

- [AI digital consulting website](https://www.figma.com/community/file/1530851387108287299): hierarquia tipográfica forte para serviços de consultoria.
- [AI agency website](https://www.figma.com/community/file/1540969651707472379): organização modular e títulos de impacto.

Os arquivos Community não puderam ser abertos pela ferramenta de pesquisa; a apresentação oficial dos exemplos foi consultada. A implementação é própria, não uma cópia de template. Cores e efeitos de vidro dos exemplos não foram importados.

## Páginas legais e pendências

- Rotas /privacidade e /termos com navegação de seções, metadados próprios e links no rodapé; direitos reservados incluídos.
- Usuário informou o nome OCOF Company e a ausência de CNPJ e e-mail. Nenhum dado de contato foi inventado.
- Textos ainda são minutas: falta definir o canal de atendimento de privacidade, identificar o responsável pelo tratamento e validar hospedagem, registros, retenção, fornecedores e práticas reais. Revisão jurídica antes de publicação definitiva.
- Enquanto minutas, as páginas usam noindex e não entram no sitemap.
- Nenhum formulário, cadastro, pagamento, pixel ou analytics foi adicionado. Fontes não geram conexões do visitante ao Google.

## Verificação da revisão

- `npm run lint`, `npm run typecheck` e `npm run build`: aprovados.
- Navegador: Home, privacidade e termos carregados; links legais, retorno ao site, menu móvel/Escape e acordeão verificados.
- Home sem transbordamento horizontal em 1280, 390 e 320px; páginas legais conferidas no mobile.
- Estilos computados da Home: apenas os cinco valores da paleta e transparência sem pigmento; Archivo e Manrope confirmadas. Console sem erros/avisos durante as verificações.
- Alto contraste e redução de movimento preservados no CSS; não se trata de auditoria completa de acessibilidade.

## Histórico de implementação

- Versão inicial: Plus Jakarta Sans + Cormorant Garamond, superfícies neutras auxiliares e fotografia institucional.
- Revisão de 20/09/2026 a pedido do usuário: paleta estrita de cinco cores, Archivo + Manrope, monograma sem fotografia, páginas legais e direitos reservados. Mudanças restritas a site-ocof; sem commit, push ou publicação.
