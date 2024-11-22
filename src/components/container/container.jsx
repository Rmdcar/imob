import styles from "./styles.module.css";

const Container = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <div><h4>O melhor imóvel da região</h4></div>
      </div>
      <div className={styles.right}>
        <div className={styles.profile}>
          <img
            src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            alt="imagem"
          />
          
        </div>
        
        <div className={styles.profileDespcription}>
        <h3>John Doe</h3>
        <h3>Informações para contato: (11)987654321</h3>
        <h3>Contate o anunciante: johndoe@gmail.com</h3>
        </div>
        <div>
        <form>
          <input type='text' required placeholder="Digite seu nome"></input>
          <input type='number' required placeholder="Telefone "></input>
          <input type='email' required placeholder="Email"></input>
          <textarea placeholder="Deixe sua mensagem"></textarea>
          <button>Enviar mensagem</button>
        </form>
      </div>
      </div>
    </section>
  );
};
export default Container;
