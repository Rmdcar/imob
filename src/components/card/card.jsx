import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../../services/Api";


const Card = () => {
  const [imobi, setImobi] = useState([]);

  useEffect(() => {
    Api.get("/imoveis/todos")
      .then((response) => {
        setImobi(response.data);
      })
      .catch(() => {
        console.log("Erro: sistema ");
      });
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h3>Encontre o imóvel dos seus sonhos</h3>
      <div className={styles.divCards}>
        {imobi.map((item) => (
          <div key={item.id} className={styles.container}>
            <Link to={`/contato/${item._id}`}>
              <div className={styles.content}>
                <h6 className={styles.text}>Tipo: {item.tipo}</h6>
                <h6 className={styles.text}>Estado: {item.estado}</h6>
                <h6 className={styles.text}>Cidade: {item.cidade}</h6>
                <h6 className={styles.text}>Descrição: {item.descricao}</h6>
                <h6 className={styles.text}>Valor: R$ {item.valor}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
