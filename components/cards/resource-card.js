import {motion} from 'framer-motion'
import styles from './resource-card.module.scss'

const ResourceCard = (props) => {
    return (
        <motion.div className={styles.ResourceCard}
        initial={{ rotate: 330, scale: 0, opacity: 0 }}
        animate={{ 
            rotate: 360, 
            scale: 1, 
            opacity: 1
        }}
        transition={{ 
            type: 'spring',
            duration: 0.15
        }}
        whileHover={{
            translateY: '-2px',
            boxShadow: '0px 5px 12px rgba(0, 0, 0, 0.22)',
            duration: 0.15
        }}
        >
            {props.icon}
            <h6 className='detail-title'>{props.title}</h6>
            <p className={styles.description}>{props.description}</p>
            
            <a href={props.link} className={styles.button}>
                Read more
            </a>
        </motion.div>
    )
}

export default ResourceCard