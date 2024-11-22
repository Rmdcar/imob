import styles from './styles.module.css'
import { Link } from 'react-router-dom';

const BoxLogin = () => {
  return (
    <>
    <div className={styles.containerLogin}>

      
        <div className={styles.segundaDiv}>
            <form >
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
                <button>Fazer login</button>
                <Link to={'/cadastro'}> Clique aqui para novo cadastro</Link>

            </form>
        </div>
      </div>
      
    </>
  );
};
export default BoxLogin
