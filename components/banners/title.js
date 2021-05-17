import styles from './title.module.scss'

const Title = (props) => {
    return (
        <h6 className={styles.Title}>{props.content}</h6>
    )
}

export default Title