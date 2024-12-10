import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom';
import Api from '../../services/Api'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BoxLogin = () => {
  const [data, setData] = useState({email: '',password: ''});
  const navigate = useNavigate();

  const InputValue = (e) => setData({
    ...data, [e.target.name]: e.target.value    
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post('/login', data)
      .then((response) => {
        if(response.data.error===true){
          console.log(response)
          toast.error(response.data.message)
        } else {
          console.log(response)
          localStorage.setItem('token', response.data.token);
          const expirationTime = new Date().getTime() + 1000*100
          localStorage.setItem('tokenExpiration', expirationTime);
          navigate('/dashboard')
        }
        
      })
      .catch((error) => {
        console.log(error);
        toast.error('Erro no servidor! Contate o administrador')
        
      });
  };
  


  return (
    <>
    <div className={styles.containerLogin}>

      
        <div className={styles.segundaDiv}>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                type="text"
                name="email"
                placeholder="Informe seu E-mail"
                onChange={InputValue}
                />
                <label>Senha</label>
                <input 
                 type="password"
                 name="password"
                 placeholder="Informe sua senha"
                 onChange={InputValue}
                 />
                <button type='submit'>Fazer login</button>
                <Link to={'/cadastro'}> Clique aqui para novo cadastro</Link>

            </form>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};
export default BoxLogin
