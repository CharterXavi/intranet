import {motion} from 'framer-motion'
import styles from './title.module.scss'

const Title = (props) => {
    return (
        <motion.h6 className={styles.Title}
        initial={{ width: '75%', opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        transition={{ type: 'spring', duration: 1 }}
        >
            {props.content}
        </motion.h6>
    )
}

export default Title