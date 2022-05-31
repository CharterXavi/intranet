import InlinePlaceholder from "./emp-spotlight1"
import styles from './inline-placeholder.module.scss'

const Announcement = (props) => {
    
    const { title } = props;

    return(
        <div className={styles.InlinePlaceholder}>
            {title}
        </div>
    )
};

export default Announcement
