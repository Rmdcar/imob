import styles from "./styles.module.css";
import { FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  const imgID = "1i1n1B-HXh4s66ZnrTRh8_YOmRmrdN2zE"
  return (
    <>
      <section className={styles.firstsection}>
        <div className={styles.imagens}>
          <img src={`https://drive.google.com/thumbnail?id=${imgID}&sz=w1000`} alt="logo" className={styles.logo} />
          <div className={styles.icones}>
          <FaFacebook size="1em" /> 
          <FaInstagram size="1em" />
          <FaWhatsapp size="1em"/>
          </div>

        </div>
        <div>
          <h1 className={styles.header}>VivaLar Imóveis</h1>
        </div>
        <span className={styles.itens}>
        <div>
          <ul>
            <li>Missão</li>
            <li>Visão</li>
            <li>Valores</li>
          </ul>
        </div>
        <div>
          <li>Localização</li>
          <li>Nossa equipe</li>
          <li>Contato</li>
        </div>
        <div>
          <ul>
            <li>Comprar</li>
            <li>Vender</li>
            <li>Alugar</li>
          </ul>
        </div>
        </span>
      </section>
    </>
  );
};
export default Footer;
