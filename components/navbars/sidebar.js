import ButtonPrimary from '../buttons/button-primary'
import {CharterLogoDark} from 'unify-design-icons'
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
                <ButtonPrimary link='/' content='charterhcg.com' />
            </div>
        </div>
    )
}

export default Sidebar