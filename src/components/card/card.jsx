import styles from "./styles.module.css";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import Api from '../../services/Api'



const Card = () => {
  return (
    <>
    <div className={styles.divCards}>
      
      <div className={styles.cards}>
      <Link to="/contato">
        <div className={styles.container}>
          
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="imagem"
          />
          
          <h4>Apartamento</h4>
          <span>Vila Jussara</span>
          <span>R$ 2.400,00</span>
          <span>Detalhes </span>
        </div>
        </Link>
      </div>

     
      
      </div>
    </>
  );
};
export default Card;
