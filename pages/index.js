function Home() {
  return (
    <main
      style={{
        height: "100vh",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      <section style={{ maxWidth: "700px" }}>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#555",
          }}
        >
          Eis que estou à porta e bato; se alguém ouvir a minha voz, e abrir a
          porta, entrarei em sua casa, e com ele cearei, e ele comigo.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#555",
          }}
        >
          Ao que vencer, eu lhe concederei que se assente comigo no meu trono.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#555",
          }}
        >
          Quem tem ouvidos, ouça o que o Espírito diz às igrejas.
        </p>

        <span
          style={{
            display: "block",
            marginTop: "25px",
            fontSize: "14px",
            color: "#888",
          }}
        >
          Apocalipse 3:20–22
        </span>
      </section>
    </main>
  );
}

export default Home;
