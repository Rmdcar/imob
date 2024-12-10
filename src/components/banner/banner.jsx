import styles from "./styles.module.css";

const Banner = () => {
  return (
    <>
      <h2>Descubra os melhores imóveis na região!!!</h2>
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <button className={styles.botaoCadastro}>Cadastre agora</button>
      </div>
    </>
  );
};

export default Banner;
