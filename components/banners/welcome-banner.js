import styles from './welcome-banner.module.scss'

const WelcomeBanner = (props) => {
    return (
        <div className={styles.WelcomeBanner}>
            <h5>{props.title}</h5>
            <div className={styles.right}>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
            </div>
        </div>
    )
}

export default WelcomeBanner