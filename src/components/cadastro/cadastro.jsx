import styles from './styles.module.css'
import { Link } from 'react-router-dom';

const BoxCadastro = () => {
  return (
    <>
    <div className={styles.containerLogin}>

      
        <div className={styles.segundaDiv}>
            <form >
            <label>Nome</label>
                <input
                type="text"
                name="nome"
                placeholder="Informe seu nome"
                />
                <label>Email</label>
                <input
                type="text"
                name="email"
                placeholder="Informe seu E-mail"
                />
                <label>Senha</label>
                <input 
                 type="password"
                 name="password"
                 placeholder="Informe sua senha"
                />
                <button>Cadastrar</button>
             

            </form>
        </div>
      </div>
      
    </>
  );
};
export default BoxCadastro
