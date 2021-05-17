import Title from '../banners/title'
import styles from './employee-spotlight.module.scss'

const EmployeeSpotlight = () => {
    return (
        <div className={styles.EmployeeSpotlight}>
            <Title content='Employee Spotlight' />
            <div className={styles.container}>
    
            </div>
        </div>
    )
}

export default EmployeeSpotlight