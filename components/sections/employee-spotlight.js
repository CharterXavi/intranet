import Placeholder from '../cards/placeholder'
import Title from '../banners/title'
import {motion} from 'framer-motion'
import styles from './employee-spotlight.module.scss'

const EmployeeSpotlight = () => {
    return (
        <div className={styles.EmployeeSpotlight}>
            <Title content='Employee Spotlight' />
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
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
            </motion.div>
        </div>
    )
}

export default EmployeeSpotlight