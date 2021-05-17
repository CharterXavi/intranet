import {ClockIconDark, GearsIconDark, NetworkIconDark, SquaresIconDark, VolunteerIconDark} from 'unify-design-icons'

import Link from 'next/link'
import styles from './menu.module.scss'

const Menu = () => {
    return (
        <ul className={styles.Menu}>
            <li>
                <Link href='/'>
                    <a>
                        <SquaresIconDark className={styles.icon} /> Feed
                    </a>
                </Link>
            </li>
            <li>
                <Link href='/blog'>
                    <a>
                        <ClockIconDark className={styles.icon} /> The Latest
                    </a>
                </Link>
            </li>
            <li>
                <Link href='/human-resources'>
                    <a>
                        <NetworkIconDark className={styles.icon} /> HR
                    </a>
                </Link>
            </li>
            <li>
                <Link href='/information-technology'>
                    <a>
                        <GearsIconDark className={styles.icon} /> IT
                    </a>
                </Link>
            </li>
        </ul>
    )
}

export default Menu