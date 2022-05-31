import EmployeeSpotlight1 from '../placeholders/emp-spotlight1'
import EmployeeSpotlight2 from '../placeholders/emp-spotlight2'
import EmployeeSpotlight3 from '../placeholders/emp-spotlight3'
import EmployeeSpotlight4 from '../placeholders/emp-spotlight4'
import EmployeeSpotlight5 from '../placeholders/emp-spotlight5'
import EmployeeSpotlight6 from '../placeholders/emp-spotlight6'
import EmployeeSpotlight7 from '../placeholders/emp-spotlight7'
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
                <EmployeeSpotlight1 />
                <EmployeeSpotlight2 />
                <EmployeeSpotlight3 />
                <EmployeeSpotlight4 />
                <EmployeeSpotlight5 />
                <EmployeeSpotlight6 />
                <EmployeeSpotlight7 />

            </motion.div>
        </div>
    )
}

export default EmployeeSpotlight