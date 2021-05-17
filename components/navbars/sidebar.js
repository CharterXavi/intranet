import {CharterLogoDark, HealthcareIconDark} from 'unify-design-icons'

import ButtonPrimary from '../buttons/button-primary'
import Link from 'next/link'
import Menu from '../navbars/menu'
import styles from './sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.topMenu}>
                <div className={styles.brand}>
                    <CharterLogoDark className={styles.logo} />
                </div>
                <Menu />
            </div>
            <div className={styles.bottomMenu}>
                <Link href='/'>
                    <a>
                        <HealthcareIconDark className={styles.icon} /> COVID19 News
                    </a>
                </Link>
                <ButtonPrimary link='https://www.charterhcg.com' content='charterhcg.com' />
            </div>
        </div>
    )
}

export default Sidebar