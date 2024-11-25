import styles from './styles.module.css'
import { Link } from 'react-router-dom'

function Header (){
    const imgID = "1i1n1B-HXh4s66ZnrTRh8_YOmRmrdN2zE"
    return (
        <>
        <section className={styles.firstsection}>
        <Link to="/"><img src={`https://drive.google.com/thumbnail?id=${imgID}&sz=w1000`} alt="logo" className={styles.logo}/></Link>
            
        <div>
        
        <h1 className={styles.header}>VivaLar Imóveis</h1>
        
        </div>
        <div className={styles.divbutton}>
            <Link to="/login" className={styles.button}>
            Cadastro/Login
            </Link>
        </div>
        </section>
        </>
        
    )
}
export default Header