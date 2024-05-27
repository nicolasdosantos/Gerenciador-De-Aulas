import Banner2 from "../components/Banner2";
import styles from "../components/Login.module.css"

function Login() {
    return (
        <div className="App">
            <Banner2>
                <div className={styles.card}>
                    <div className={styles.logoSection}>
                        <img src="/logoRoxa.png" className={styles.logo} alt="Logo"/>
                        <p className={styles.subtitle}>ADMINISTRADORES</p>
                    </div>
                    <form className={styles.form}>
                        <input type="text" placeholder="Usuário" className={styles.input}/>
                        <input type="password" placeholder="Senha" className={styles.input}/>
                        <button type="submit" className={styles.button}>Entrar</button>
                    </form>
                </div>
            </Banner2>
        </div>
    );
}

export default Login;