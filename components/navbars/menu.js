import Link from 'next/link'
import styles from './menu.module.scss'

const Menu = () => {
    return (
        <ul className={styles.Menu}>
            <li><Link href='/'><a>Feed</a></Link></li>
            <li><Link href='/blog'><a>The Latest</a></Link></li>
            <li><Link href='/human-resources'><a>HR</a></Link></li>
            <li><Link href='/information-technology'><a>IT</a></Link></li>
        </ul>
    )
}

export default Menu