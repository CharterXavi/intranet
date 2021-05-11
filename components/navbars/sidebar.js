import styles from './sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <ul className={styles.menu}>
                <li>Feed</li>
                <li>The Latest</li>
                <li>HR</li>
                <li>IT</li>
            </ul>
        </div>
    )
}

export default Sidebar