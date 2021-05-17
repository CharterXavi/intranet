import {motion} from 'framer-motion'
import styles from './welcome-banner.module.scss'

const WelcomeBanner = (props) => {
    return (
        <motion.div className={styles.WelcomeBanner}
        initial={{ width: '75%', opacity: 0}}
        animate={{ width: '100%', opacity: 1 }}
        transition={{ type: 'spring', duration: 1 }}
        >
            <h1>{props.title}</h1>
            <div className={styles.right}>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
            </div>
        </motion.div>
    )
}

export default WelcomeBanner