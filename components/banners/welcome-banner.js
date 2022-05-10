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
                <a href='https://charterhcg.training.reliaslearning.com/'>
                    <div className={styles.block}>Charter Learning Center</div>
                </a>
                <a href='https://www.office.com/'>
                    <div className={styles.block}>Office 365</div>
                </a>
                <a href='https://workforcenow.adp.com/theme/index.html'>
                    <div className={styles.block}>I.T. Helpdesk</div>
                </a>
            </div>
        </motion.div>
    )
}

export default WelcomeBanner