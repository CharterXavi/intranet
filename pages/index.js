import Announcements from '../components/sections/announcements'
import CompanyResources from '../components/sections/company-resources'
import EmployeeSpotlight from '../components/sections/employee-spotlight'
import Head from 'next/head'
import HomeNews from '../components/sections/home-news'
import Sidebar from '../components/navbars/sidebar'
import Topbar from '../components/navbars/topbar'
import WelcomeBanner from '../components/banners/welcome-banner'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Charter Intranet</title>
        <meta name="description" content="The official intranet portal for Charter Healthcare Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.dashboard}>
        <Topbar />
        <Sidebar />
        <div className={styles.content}>
          <WelcomeBanner title='Welcome to Charter Intranet!' />

          <div className={styles.twoColumn}>
            <div className={styles.left}>
              <HomeNews />
              <CompanyResources />
            </div>
            <div className={styles.right}>
              <EmployeeSpotlight />
              <Announcements />
            </div>
          </div> 
        </div>
      </main>
    </div>
  )
}
