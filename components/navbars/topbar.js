import {
    FacebookIconDark,
    InstagramIconDark,
    LinkedinIconDark,
    SearchIcon,
    TwitterIconDark
} from 'unify-design-icons'

import styles from './topbar.module.scss'

const Topbar = () => {
    return (
        <div className={styles.Topbar}>
            <div className={styles.search}>
                <label htmlFor="search"></label>
                <input type="text" id="search" name="search" placeholder="Looking for something?" />
                <SearchIcon className={styles.icon} />
            </div>
            <div className={styles.socials}>
                <a href="https://www.facebook.com/CharterHC"><FacebookIconDark className={styles.icon} /></a>
                <a href="https://www.instagram.com/charterhc/"><InstagramIconDark className={styles.icon} /></a>
                <a href="https://www.linkedin.com/company/charter-healthcare"><LinkedinIconDark className={styles.icon} /></a>
                <a href=""><TwitterIconDark className={styles.icon} /></a>
            </div>
        </div>
    )
}

export default Topbar