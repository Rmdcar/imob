import styles from './styles.module.css'

const Topbanner = ()=>{
    return(
        <>
        <div className={styles.container}>
        <img className={styles.image} src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
        <h2>Dê moradia ao seu sonho.</h2>
        <p>Não perca a sua oportunidade hoje!!! </p>

        </div>
        </>
    )
}
export default Topbanner