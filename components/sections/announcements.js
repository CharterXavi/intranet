import InlinePlaceholder from '../placeholders/inline-placeholder'
import Title from '../banners/title'
import {motion} from 'framer-motion'
import styles from './announcements.module.scss'

const Announcements = () => {
    return (
        <div className={styles.Announcements}>
            <Title content='Announcements' />
            <motion.div className={styles.container}
            initial={{ rotate: 330, scale: 0, opacity: 0 }}
            animate={{ 
                rotate: 360, 
                scale: 1, 
                opacity: 1
            }}
            transition={{ 
                type: 'spring',
                duration: 0.4
            }}
            >
                <InlinePlaceholder />
                <InlinePlaceholder />
                <InlinePlaceholder />
                <InlinePlaceholder />
                <InlinePlaceholder />
            </motion.div>
        </div>
    )
}

export default Announcements