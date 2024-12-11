import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import Api from "../../services/Api";

const Container = () => {
  const { id } = useParams(); 
  const [imobi, setImobi] = useState(null);

  useEffect(() => {
    Api.get(`/imovel/${id}`) 
      .then((response) => {
        console.log("Dados do imóvel:", response.data); 
        setImobi(response.data);
      })
      .catch(() => {
        console.log("Erro: não foi possível carregar os dados do imóvel.");
      });
  }, [id]);

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Imagem do imóvel"
        />
        <div>
          <h4>O melhor imóvel da região</h4>
        </div>
        {/* Renderizar as informações do imóvel */}
        {imobi ? (
          <div className={styles.imobiInfo}>
            <h5>Tipo: {imobi.tipo}</h5>
            <h5>Estado: {imobi.estado}</h5>
            <h5>Cidade: {imobi.cidade}</h5>
            <h5>Descrição: {imobi.descricao}</h5>
            <h5>Valor: R$ {imobi.valor}</h5>
          </div>
        ) : (
          <p>Carregando informações do imóvel...</p>
        )}
      </div>
      <div className={styles.right}>
        <div className={styles.profile}>
          <img
            src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            alt="Imagem do anunciante"
          />
        </div>
        <div className={styles.profileDescription}>
          <h3>John Doe</h3>
          <h3>Informações para contato: (11) 98765-4321</h3>
          <h3>Contate o anunciante: johndoe@gmail.com</h3>
        </div>
        <div>
          <form>
            <input type="text" required placeholder="Digite seu nome" />
            <input type="number" required placeholder="Telefone" />
            <input type="email" required placeholder="Email" />
            <textarea placeholder="Deixe sua mensagem"></textarea>
            <button type="submit">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Container;
