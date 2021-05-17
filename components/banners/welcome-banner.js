import styles from './welcome-banner.module.scss'

const WelcomeBanner = () => {
    return (
        <div className={styles.WelcomeBanner}>
            <h5>Welcome to Charter Intranet!</h5>
            <div className={styles.right}>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
            </div>
        </div>
    )
}

export default WelcomeBanner