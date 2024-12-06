import styles from './styles.module.css';
import Api from '../../services/Api';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const BoxCadastro = () => {

  const [data, setData] = useState({name: '',email: '',password: ''});

  const InputValue = (e) => setData({
    ...data, [e.target.name]: e.target.value    
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post('/register', data)
      .then((response) => {
        if (response.data.error===true) {
          toast.error(response.data.message); // Exibe mensagem de erro
          
        } else {
          toast.success(response.data.message); // Exibe mensagem de sucesso
          
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('Erro ao se registrar, por favor tente novamente.');  // Exibe mensagem de erro do servidor
      });
  };
  
  

  return (
    <>
    <div className={styles.containerLogin}>
      <div className={styles.segundaDiv}>
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Informe seu nome"
            onChange={InputValue}
          />
          <label>Email</label>
          <input
            type="email"
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
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
    
    <ToastContainer/>
    </>
  );
  
};


export default BoxCadastro;
