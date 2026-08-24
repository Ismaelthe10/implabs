import { useMemo } from "react";

const NOME = "Ismael Monteiro";
const CARGO = "Full stack developer";
const BIO = "Desenvolvo plataformas web";

const LINKS = {
  github: "https://github.com/Ismaelthe10",
  linkedin: "https://www.linkedin.com/in/impismael/",
  email: "ismael-dev@outlook.com",
};

// x e y são as coordenadas da estrela dentro da constelação (viewBox 640×320)
// dy desloca o rótulo para cima (negativo) ou para baixo (positivo)
const STACK = [
  { nome: "React", x: 70, y: 190, dy: 28 },
  { nome: "Next.js", x: 170, y: 90, dy: -20 },
  { nome: "TypeScript", x: 285, y: 165, dy: 30 },
  { nome: "Node.js", x: 395, y: 70, dy: -20 },
  { nome: "PostgreSQL", x: 470, y: 240, dy: 30 },
  { nome: "Docker", x: 580, y: 120, dy: -20 },
];

// índices de STACK que formam a linha principal e o ramo da constelação
const LINHA_PRINCIPAL = [0, 1, 2, 3, 5];
const RAMO = [2, 4];

const PROJETOS = [
  {
    titulo: "Barbearia Arrumadinho",
    pilha: "React 19 · React Router 7 · Vite · Firebase · Cloudinary · Vercel",
    link: "https://www.barbeariaarrumadinho.com.br/",
  },
  {
    titulo: "Metrópole Serviços",
    pilha: "React 19 · React Router 7 · Vite 7 · Tailwind CSS 4 · Vercel",
    link: "https://metropole-servicos.vercel.app/",
  },
  {
    titulo: "Doug Burguers",
    pilha: "React · TypeScript · Next.js App Router · CSS",
    link: "",
    situacao: "em breve",
  },
  {
    titulo: "Clone TabNews",
    pilha:
      "Node.js 24 · Next.js 16 · React 19 · PostgreSQL 16 · Jest · Docker · GitHub Actions",
    link: "https://github.com/Ismaelthe10/clone-tabnews",
    situacao: "estudo",
  },
];

const QUANTIDADE_ESTRELAS = 160;
const PONTO_DE_QUEBRA = 720; // px — abaixo disso, constelação vira chips

const ESTILOS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=JetBrains+Mono:wght@400;500&family=Jost:wght@300;400;500&display=swap');

:root {
  --vazio:  #05060e;
  --luz:    #eef0fb;
  --ambar:  #f5c46b;
  --poeira: #8f9ac9;
  --linha:  rgba(143, 154, 201, 0.16);

  --serif: 'Cormorant Garamond', Georgia, serif;
  --mono:  'JetBrains Mono', ui-monospace, monospace;
  --sans:  'Jost', system-ui, sans-serif;
}

html, body, #root { margin: 0; padding: 0; background: var(--vazio); }
*, *::before, *::after { box-sizing: border-box; }

a:focus-visible {
  outline: 2px solid var(--ambar);
  outline-offset: 4px;
  border-radius: 2px;
}

/* ── céu ───────────────────────────────────── */
.ceu {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(1100px 700px at 78% -8%, rgba(74,53,140,.42), transparent 62%),
    radial-gradient(900px 620px at 12% 22%, rgba(22,54,124,.40), transparent 60%),
    radial-gradient(760px 560px at 50% 108%, rgba(120,72,54,.20), transparent 62%),
    linear-gradient(175deg, #070a1c 0%, var(--vazio) 55%, #04050c 100%);
}

.estrela {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  animation: cintilar var(--duracao, 4s) ease-in-out var(--atraso, 0s) infinite;
}
@keyframes cintilar {
  0%, 100% { opacity: .22; transform: scale(.85); }
  50%      { opacity: 1;   transform: scale(1.15); }
}

.cadente {
  position: absolute;
  height: 1.6px;
  border-radius: 999px;
  background: linear-gradient(to left,
    rgba(255,255,255,.95) 0%,
    rgba(245,196,107,.55) 28%,
    rgba(245,196,107,0) 100%);
  filter: drop-shadow(0 0 6px rgba(255,255,255,.55));
  opacity: 0;
  animation: cair var(--duracao, 10s) cubic-bezier(.2,.55,.35,1) var(--atraso, 0s) infinite;
}
@keyframes cair {
  0%   { transform: rotate(32deg) translate3d(0,0,0); opacity: 0; }
  2%   { opacity: 1; }
  15%  { opacity: 1; }
  21%  { transform: rotate(32deg) translate3d(118vw,0,0); opacity: 0; }
  100% { transform: rotate(32deg) translate3d(118vw,0,0); opacity: 0; }
}

/* ── entradas ──────────────────────────────── */
.surgir {
  opacity: 0;
  animation: surgir .9s cubic-bezier(.22,.8,.3,1) var(--atraso, 0s) forwards;
}
@keyframes surgir {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── estrutura ─────────────────────────────── */
.pagina {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  color: var(--luz);
  font-family: var(--sans);
  font-weight: 300;
  padding: 0 clamp(20px, 6vw, 64px);
}

.secao {
  max-width: 900px;
  margin: 0 auto;
  padding: clamp(40px, 8vh, 80px) 0;
}
.secao--stack { padding: clamp(60px, 12vh, 120px) 0; }

/* ── hero ──────────────────────────────────── */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
}
.hero__cargo {
  margin: 0;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: .34em;
  text-transform: uppercase;
  color: var(--ambar);
  --atraso: .1s;
}
.hero__nome {
  margin: 0;
  font-family: var(--serif);
  font-weight: 300;
  font-size: clamp(48px, 11vw, 116px);
  line-height: 1;
  letter-spacing: -.015em;
  --atraso: .25s;
}
.hero__bio {
  margin: 4px 0 0;
  font-family: var(--mono);
  font-weight: 400;
  font-size: clamp(13px, 2.4vw, 16px);
  letter-spacing: .1em;
  color: var(--poeira);
  --atraso: .4s;
}
.hero__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 26px;
  margin-top: 14px;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: .1em;
  --atraso: .55s;
}

.elo {
  color: var(--luz);
  text-decoration: none;
  border-bottom: 1px solid rgba(245,196,107,.35);
  padding-bottom: 2px;
  transition: color .25s ease, border-color .25s ease;
}
.elo:hover { color: var(--ambar); border-color: var(--ambar); }

/* ── rótulo de seção ───────────────────────── */
.rotulo {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 38px;
}
.rotulo__texto {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: .34em;
  text-transform: uppercase;
  color: var(--ambar);
  white-space: nowrap;
}
.rotulo__risco { flex: 1; height: 1px; background: var(--linha); }

/* ── stack: constelação (desktop) ──────────── */
.constelacao { display: block; width: 100%; overflow: visible; }
.constelacao__traco {
  fill: none;
  stroke: rgba(245,196,107,.3);
  stroke-width: 1;
  stroke-dasharray: 900;
  stroke-dashoffset: 900;
  animation: tracar 2.6s ease .4s forwards;
}
@keyframes tracar { to { stroke-dashoffset: 0; } }
.constelacao__halo   { fill: var(--ambar); opacity: .12; }
.constelacao__nucleo { fill: var(--ambar); }
.constelacao__nome {
  fill: var(--poeira);
  font-family: var(--mono);
  font-size: 14px;
  letter-spacing: 1.4px;
  text-anchor: middle;
}

/* ── stack: chips (mobile) ─────────────────── */
.chips { display: none; flex-wrap: wrap; gap: 10px; }
.chip {
  border: 1px solid var(--linha);
  border-radius: 999px;
  padding: 8px 14px;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--poeira);
}

/* ── projetos ──────────────────────────────── */
.projetos { border-top: 1px solid var(--linha); }

.registro {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 24px 0;
  border-bottom: 1px solid var(--linha);
  transition: padding-left .35s cubic-bezier(.22,.8,.3,1), background .35s ease;
}
a.registro:hover { padding-left: 12px; background: rgba(143,154,201,.05); }
a.registro:hover .registro__titulo { color: var(--ambar); }
a.registro:hover .registro__seta { opacity: 1; transform: translate(3px, -3px); }

.registro__linha {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 6px 28px;
}
.registro__titulo {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(22px, 4vw, 28px);
  letter-spacing: .01em;
  transition: color .3s ease;
}
.registro__seta {
  color: var(--ambar);
  font-size: 15px;
  opacity: .35;
  transition: transform .35s ease, opacity .35s ease;
}
.registro__situacao {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: rgba(245,196,107,.8);
  border: 1px solid rgba(245,196,107,.28);
  border-radius: 999px;
  padding: 4px 9px;
}
.registro__pilha {
  margin: 0;
  flex: 1 1 300px;
  font-family: var(--mono);
  font-size: 11px;
  line-height: 1.9;
  letter-spacing: .06em;
  color: var(--poeira);
  text-align: right;
}

/* ── contato ───────────────────────────────── */
.contato__frase {
  margin: 0;
  max-width: 600px;
  font-family: var(--serif);
  font-size: clamp(24px, 5vw, 38px);
  font-weight: 300;
  line-height: 1.35;
}
.contato__email {
  margin: 24px 0 0;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: .08em;
  color: var(--poeira);
}

/* ── rodapé ────────────────────────────────── */
.rodape {
  max-width: 640px;
  margin: 0 auto;
  padding: clamp(60px, 12vh, 120px) 0 70px;
  text-align: center;
  border-top: 1px solid var(--linha);
}
.rodape__texto {
  margin: 48px 0 0;
  font-family: var(--serif);
  font-style: italic;
  font-weight: 300;
  font-size: clamp(16px, 2.6vw, 19px);
  line-height: 1.85;
  color: rgba(143,154,201,.85);
}
.rodape__fonte {
  display: block;
  margin-top: 22px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: .28em;
  text-transform: uppercase;
  color: rgba(143,154,201,.55);
}

/* ── aviso de prévia ───────────────────────── */
.aviso {
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 7px 15px;
  border: 1px solid var(--linha);
  border-radius: 999px;
  background: rgba(5,6,14,.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  font-family: var(--mono);
  font-size: 9.5px;
  letter-spacing: .2em;
  text-transform: uppercase;
  white-space: nowrap;
  color: rgba(143,154,201,.8);
  pointer-events: none;
  animation: surgirAviso .9s ease 1.4s both;
}
@keyframes surgirAviso {
  from { opacity: 0; transform: translate(-50%, 14px); }
  to   { opacity: 1; transform: translate(-50%, 0); }
}
.aviso::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ambar);
  box-shadow: 0 0 8px rgba(245,196,107,.8);
}

/* ── mobile ────────────────────────────────── */
@media (max-width: ${PONTO_DE_QUEBRA}px) {
  .constelacao { display: none; }
  .chips { display: flex; }
  .registro__pilha { text-align: left; }
}

/* ── acessibilidade ────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .cadente { display: none; }
  .estrela, .surgir, .constelacao__traco, .aviso {
    animation: none !important;
    opacity: 1 !important;
    stroke-dashoffset: 0 !important;
    transform: none !important;
  }
  .aviso { transform: translateX(-50%) !important; }
}
`;

/* ───────────────────────────────────────────── */

function Home() {
  return (
    <>
      <style>{ESTILOS}</style>

      <Ceu />

      <div className="aviso" role="status">
        Prévia · site em construção
      </div>

      <main className="pagina">
        <Hero />
        <SecaoStack />
        <SecaoProjetos />
        <SecaoContato />
        <Rodape />
      </main>
    </>
  );
}

/* ── céu de fundo ───────────────────────────── */

function Ceu() {
  const estrelas = useMemo(
    () =>
      Array.from({ length: QUANTIDADE_ESTRELAS }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        tamanho: Math.random() * 2 + 0.7,
        brilho: 0.25 + Math.random() * 0.6,
        atraso: Math.random() * 6,
        duracao: 3 + Math.random() * 5,
      })),
    [],
  );

  const cadentes = useMemo(
    () => [
      { top: -4, left: 6, largura: 150, duracao: 9, atraso: 1 },
      { top: 2, left: 38, largura: 190, duracao: 13, atraso: 5.5 },
      { top: -8, left: 62, largura: 120, duracao: 11, atraso: 8.5 },
      { top: 14, left: -6, largura: 165, duracao: 16, atraso: 12 },
    ],
    [],
  );

  return (
    <div className="ceu" aria-hidden="true">
      {estrelas.map((e, i) => (
        <span
          key={`e-${i}`}
          className="estrela"
          style={{
            top: `${e.top}%`,
            left: `${e.left}%`,
            width: `${e.tamanho}px`,
            height: `${e.tamanho}px`,
            opacity: e.brilho,
            "--atraso": `${e.atraso}s`,
            "--duracao": `${e.duracao}s`,
          }}
        />
      ))}
      {cadentes.map((c, i) => (
        <span
          key={`c-${i}`}
          className="cadente"
          style={{
            top: `${c.top}%`,
            left: `${c.left}%`,
            width: `${c.largura}px`,
            "--atraso": `${c.atraso}s`,
            "--duracao": `${c.duracao}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── hero ───────────────────────────────────── */

function Hero() {
  return (
    <section className="hero">
      <p className="hero__cargo surgir">{CARGO}</p>
      <h1 className="hero__nome surgir">{NOME}</h1>
      <p className="hero__bio surgir">{BIO}</p>

      <nav className="hero__links surgir">
        <a className="elo" href={LINKS.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          className="elo"
          href={LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a className="elo" href={`mailto:${LINKS.email}`}>
          E-mail
        </a>
      </nav>
    </section>
  );
}

/* ── stack ──────────────────────────────────── */

function SecaoStack() {
  const pontos = (indices) =>
    indices.map((i) => `${STACK[i].x},${STACK[i].y}`).join(" ");

  return (
    <section className="secao secao--stack">
      <Rotulo texto="Stack" />

      <svg
        className="constelacao"
        viewBox="0 0 640 320"
        role="img"
        aria-label={`Tecnologias: ${STACK.map((s) => s.nome).join(", ")}`}
      >
        <polyline
          className="constelacao__traco"
          points={pontos(LINHA_PRINCIPAL)}
        />
        <polyline className="constelacao__traco" points={pontos(RAMO)} />
        {STACK.map((s) => (
          <g key={s.nome}>
            <circle className="constelacao__halo" cx={s.x} cy={s.y} r="11" />
            <circle className="constelacao__nucleo" cx={s.x} cy={s.y} r="3.5" />
            <text className="constelacao__nome" x={s.x} y={s.y + s.dy}>
              {s.nome}
            </text>
          </g>
        ))}
      </svg>

      <ul className="chips">
        {STACK.map((s) => (
          <li className="chip" key={s.nome}>
            {s.nome}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ── projetos ───────────────────────────────── */

function SecaoProjetos() {
  return (
    <section className="secao">
      <Rotulo texto="Projetos" />
      <div className="projetos">
        {PROJETOS.map((p) => (
          <Registro key={p.titulo} projeto={p} />
        ))}
      </div>
    </section>
  );
}

function Registro({ projeto }) {
  const conteudo = (
    <div className="registro__linha">
      <h3 className="registro__titulo">
        {projeto.titulo}
        {projeto.link && (
          <span className="registro__seta" aria-hidden="true">
            ↗
          </span>
        )}
        {projeto.situacao && (
          <span className="registro__situacao">{projeto.situacao}</span>
        )}
      </h3>
      <p className="registro__pilha">{projeto.pilha}</p>
    </div>
  );

  if (!projeto.link) {
    return <div className="registro">{conteudo}</div>;
  }

  return (
    <a
      className="registro"
      href={projeto.link}
      target="_blank"
      rel="noreferrer"
    >
      {conteudo}
    </a>
  );
}

/* ── contato ────────────────────────────────── */

function SecaoContato() {
  return (
    <section className="secao">
      <Rotulo texto="Contato" />
      <p className="contato__frase">
        Tem uma ideia para tirar do papel?{" "}
        <a
          className="elo"
          href={`mailto:${LINKS.email}`}
          style={{ whiteSpace: "nowrap" }}
        >
          Entre em contato
        </a>
        .
      </p>
      <p className="contato__email">{LINKS.email}</p>
    </section>
  );
}

/* ── rodapé ─────────────────────────────────── */

function Rodape() {
  return (
    <footer className="rodape">
      <p className="rodape__texto">
        Eis que estou à porta e bato; se alguém ouvir a minha voz, e abrir a
        porta, entrarei em sua casa, e com ele cearei, e ele comigo. Ao que
        vencer, eu lhe concederei que se assente comigo no meu trono. Quem tem
        ouvidos, ouça o que o Espírito diz às igrejas.
      </p>
      <span className="rodape__fonte">Apocalipse 3:20–22</span>
    </footer>
  );
}

/* ── auxiliar ───────────────────────────────── */

function Rotulo({ texto }) {
  return (
    <div className="rotulo">
      <span className="rotulo__texto">{texto}</span>
      <span className="rotulo__risco" />
    </div>
  );
}

export default Home;
