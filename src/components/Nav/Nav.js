import styles from "./Nav.module.css"

export default function Nav(props) {

    const handleLogIn = () => {
        props.getLogInBoolean(true)
    }

    console.log('nav rendered')
    console.log('================')

    return (
        <nav className={styles.nav}>
            <div className={styles.nav__left}>
                <h1>Demo</h1>
            </div>
            <div className={styles.nav__right}>
                <p>Home</p>
                <p>Courses</p>
                <p onClick={handleLogIn}>Log In</p>
            </div>
        </nav>
    )
}