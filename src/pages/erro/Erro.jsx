import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import styles from './styles.module.css'


const Erro = ()=> {
    return(
        <><Header/>
        <div className={styles.divErro}>
        <h1>Ooppps....página não encontrada</h1>
        </div>
        <Footer/>
        </>
    )
}
export default Erro