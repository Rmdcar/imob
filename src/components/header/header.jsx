import styles from './styles.module.css'
import { Link } from 'react-router-dom'

function Header (){
    return (
        <>
        <section className={styles.firstsection}>
        <Link to="/"><img src="../public/logo.png" alt="logo" className={styles.logo}/></Link>
            
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