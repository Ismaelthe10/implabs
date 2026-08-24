import { useMemo } from "react";

/* ─────────────────────────────────────────────
   EDITE AQUI: seus dados
   ───────────────────────────────────────────── */
const NOME = "Ismael Monteiro";
const CARGO = "Full stack developer";
const BIO = "Desenvolvo plataformas web";

const LINKS = {
  github: "https://github.com/Ismaelthe10",
  linkedin: "https://www.linkedin.com/in/impismael/",
  email: "ismael-dev@outlook.com",
};

// x e y são as coordenadas da estrela dentro da constelação (viewBox 640×320)
const STACK = [
  { nome: "React", x: 70, y: 190, dy: 28 },
  { nome: "Next.js", x: 170, y: 90, dy: -20 },
  { nome: "TypeScript", x: 285, y: 165, dy: 30 },
  { nome: "Node.js", x: 395, y: 70, dy: -20 },
  { nome: "PostgreSQL", x: 470, y: 240, dy: 30 },
  { nome: "Docker", x: 580, y: 120, dy: -20 },
];

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

/* ───────────────────────────────────────────── */

const COR = {
  vazio: "#05060e",
  luz: "#eef0fb",
  ambar: "#f5c46b",
  poeira: "#8f9ac9",
  linha: "rgba(143,154,201,0.16)",
};

function Home() {
  const estrelas = useMemo(
    () =>
      Array.from({ length: 160 }, () => ({
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

  const caminho = [STACK[0], STACK[1], STACK[2], STACK[3], STACK[5]]
    .map((s) => `${s.x},${s.y}`)
    .join(" ");
  const ramo = `${STACK[2].x},${STACK[2].y} ${STACK[4].x},${STACK[4].y}`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=JetBrains+Mono:wght@400;500&family=Jost:wght@300;400;500&display=swap');

        html, body, #root { margin: 0; padding: 0; background: ${COR.vazio}; }
        * { box-sizing: border-box; }

        .ceu {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(1100px 700px at 78% -8%, rgba(74,53,140,0.42), transparent 62%),
            radial-gradient(900px 620px at 12% 22%, rgba(22,54,124,0.40), transparent 60%),
            radial-gradient(760px 560px at 50% 108%, rgba(120,72,54,0.20), transparent 62%),
            linear-gradient(175deg, #070a1c 0%, ${COR.vazio} 55%, #04050c 100%);
        }

        .estrela {
          position: absolute;
          border-radius: 50%;
          background: #fff;
          animation-name: cintilar;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
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
          animation-name: cair;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(.2,.55,.35,1);
        }
        @keyframes cair {
          0%   { transform: rotate(32deg) translate3d(0,0,0); opacity: 0; }
          2%   { opacity: 1; }
          15%  { opacity: 1; }
          21%  { transform: rotate(32deg) translate3d(118vw,0,0); opacity: 0; }
          100% { transform: rotate(32deg) translate3d(118vw,0,0); opacity: 0; }
        }

        .surgir {
          opacity: 0;
          animation: surgir .9s cubic-bezier(.22,.8,.3,1) forwards;
        }
        @keyframes surgir {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .traco {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: tracar 2.6s ease .4s forwards;
        }
        @keyframes tracar { to { stroke-dashoffset: 0; } }

        .elo {
          color: ${COR.luz};
          text-decoration: none;
          border-bottom: 1px solid rgba(245,196,107,.35);
          padding-bottom: 2px;
          transition: color .25s ease, border-color .25s ease;
        }
        .elo:hover { color: ${COR.ambar}; border-color: ${COR.ambar}; }

        .registro {
          display: block;
          text-decoration: none;
          color: inherit;
          padding: 24px 0;
          border-bottom: 1px solid ${COR.linha};
          transition: padding-left .35s cubic-bezier(.22,.8,.3,1), background .35s ease;
        }
        a.registro:hover { padding-left: 12px; background: rgba(143,154,201,.05); }
        a.registro:hover .titulo-projeto { color: ${COR.ambar}; }
        a.registro:hover .seta { opacity: 1; transform: translate(3px, -3px); }
        .titulo-projeto { transition: color .3s ease; }
        .seta { transition: transform .35s ease, opacity .35s ease; opacity: .35; }

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
          border: 1px solid ${COR.linha};
          border-radius: 999px;
          background: rgba(5,6,14,.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          font-family: 'JetBrains Mono', monospace;
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
          background: ${COR.ambar};
          box-shadow: 0 0 8px rgba(245,196,107,.8);
        }

        a:focus-visible {
          outline: 2px solid ${COR.ambar};
          outline-offset: 4px;
          border-radius: 2px;
        }

        .so-desktop { display: block; }
        .so-mobile  { display: none; }
        @media (max-width: 720px) {
          .so-desktop { display: none; }
          .so-mobile  { display: flex; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cadente { display: none; }
          .estrela, .surgir, .traco {
            animation: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
            transform: none !important;
          }
          .aviso { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      {/* céu de fundo */}
      <div className="ceu" aria-hidden="true">
        {estrelas.map((e, i) => (
          <span
            key={i}
            className="estrela"
            style={{
              top: `${e.top}%`,
              left: `${e.left}%`,
              width: `${e.tamanho}px`,
              height: `${e.tamanho}px`,
              opacity: e.brilho,
              animationDelay: `${e.atraso}s`,
              animationDuration: `${e.duracao}s`,
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
              animationDelay: `${c.atraso}s`,
              animationDuration: `${c.duracao}s`,
            }}
          />
        ))}
      </div>

      {/* aviso discreto de prévia */}
      <div className="aviso" role="status">
        Prévia · site em construção
      </div>

      <main
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          width: "100%",
          color: COR.luz,
          fontFamily: "'Jost', system-ui, sans-serif",
          fontWeight: 300,
          padding: "0 clamp(20px, 6vw, 64px)",
        }}
      >
        {/* ── hero ── */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "20px",
          }}
        >
          <p
            className="surgir"
            style={{
              margin: 0,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: COR.ambar,
              animationDelay: ".1s",
            }}
          >
            {CARGO}
          </p>

          <h1
            className="surgir"
            style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(48px, 11vw, 116px)",
              lineHeight: 1,
              letterSpacing: "-0.015em",
              animationDelay: ".25s",
            }}
          >
            {NOME}
          </h1>

          <p
            className="surgir"
            style={{
              margin: "4px 0 0",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 400,
              fontSize: "clamp(13px, 2.4vw, 16px)",
              letterSpacing: "0.1em",
              color: COR.poeira,
              animationDelay: ".4s",
            }}
          >
            {BIO}
          </p>

          <nav
            className="surgir"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "26px",
              marginTop: "14px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              animationDelay: ".55s",
            }}
          >
            <a
              className="elo"
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
            >
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

        {/* ── stack como constelação ── */}
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "clamp(60px, 12vh, 120px) 0",
          }}
        >
          <Rotulo texto="Stack" />

          <div className="so-desktop">
            <svg
              viewBox="0 0 640 320"
              width="100%"
              role="img"
              aria-label={`Tecnologias: ${STACK.map((s) => s.nome).join(", ")}`}
              style={{ overflow: "visible" }}
            >
              <polyline
                className="traco"
                points={caminho}
                fill="none"
                stroke="rgba(245,196,107,.3)"
                strokeWidth="1"
              />
              <polyline
                className="traco"
                points={ramo}
                fill="none"
                stroke="rgba(245,196,107,.3)"
                strokeWidth="1"
              />
              {STACK.map((s) => (
                <g key={s.nome}>
                  <circle
                    cx={s.x}
                    cy={s.y}
                    r="11"
                    fill={COR.ambar}
                    opacity="0.12"
                  />
                  <circle cx={s.x} cy={s.y} r="3.5" fill={COR.ambar} />
                  <text
                    x={s.x}
                    y={s.y + s.dy}
                    textAnchor="middle"
                    fill={COR.poeira}
                    fontFamily="'JetBrains Mono', monospace"
                    fontSize="14"
                    letterSpacing="1.4"
                  >
                    {s.nome}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div
            className="so-mobile"
            style={{ flexWrap: "wrap", gap: "10px", display: "none" }}
          >
            {STACK.map((s) => (
              <span
                key={s.nome}
                style={{
                  border: `1px solid ${COR.linha}`,
                  borderRadius: "999px",
                  padding: "8px 14px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: COR.poeira,
                }}
              >
                {s.nome}
              </span>
            ))}
          </div>
        </section>

        {/* ── projetos ── */}
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "clamp(40px, 8vh, 80px) 0",
          }}
        >
          <Rotulo texto="Projetos" />
          <div style={{ borderTop: `1px solid ${COR.linha}` }}>
            {PROJETOS.map((p) => (
              <Registro key={p.titulo} projeto={p} />
            ))}
          </div>
        </section>

        {/* ── contato ── */}
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "clamp(40px, 8vh, 80px) 0",
          }}
        >
          <Rotulo texto="Contato" />
          <p
            style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(24px, 5vw, 38px)",
              fontWeight: 300,
              lineHeight: 1.35,
              maxWidth: "600px",
            }}
          >
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
          <p
            style={{
              margin: "24px 0 0",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.08em",
              color: COR.poeira,
            }}
          >
            {LINKS.email}
          </p>
        </section>

        {/* ── rodapé ── */}
        <footer
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            padding: "clamp(60px, 12vh, 120px) 0 70px",
            textAlign: "center",
            borderTop: `1px solid ${COR.linha}`,
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(16px, 2.6vw, 19px)",
              lineHeight: 1.85,
              color: "rgba(143,154,201,.85)",
              margin: "48px 0 0",
            }}
          >
            Eis que estou à porta e bato; se alguém ouvir a minha voz, e abrir a
            porta, entrarei em sua casa, e com ele cearei, e ele comigo. Ao que
            vencer, eu lhe concederei que se assente comigo no meu trono. Quem
            tem ouvidos, ouça o que o Espírito diz às igrejas.
          </p>
          <span
            style={{
              display: "block",
              marginTop: "22px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(143,154,201,.55)",
            }}
          >
            Apocalipse 3:20–22
          </span>
        </footer>
      </main>
    </>
  );
}

function Registro({ projeto }) {
  const conteudo = (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: "6px 28px",
      }}
    >
      <h3
        className="titulo-projeto"
        style={{
          margin: 0,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(22px, 4vw, 28px)",
          letterSpacing: "0.01em",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {projeto.titulo}
        {projeto.link && (
          <span className="seta" style={{ color: COR.ambar, fontSize: "15px" }}>
            ↗
          </span>
        )}
        {projeto.situacao && (
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(245,196,107,.8)",
              border: "1px solid rgba(245,196,107,.28)",
              borderRadius: "999px",
              padding: "4px 9px",
            }}
          >
            {projeto.situacao}
          </span>
        )}
      </h3>
      <p
        style={{
          margin: 0,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          lineHeight: 1.9,
          letterSpacing: "0.06em",
          color: COR.poeira,
          flex: "1 1 300px",
          textAlign: "right",
        }}
      >
        {projeto.pilha}
      </p>
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

function Rotulo({ texto }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginBottom: "38px",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.34em",
          textTransform: "uppercase",
          color: COR.ambar,
          whiteSpace: "nowrap",
        }}
      >
        {texto}
      </span>
      <span style={{ flex: 1, height: "1px", background: COR.linha }} />
    </div>
  );
}

export default Home;
