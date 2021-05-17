import EmployeeSpotlight from '../components/sections/employee-spotlight'
import Head from 'next/head'
import Sidebar from '../components/navbars/sidebar'
import Topbar from '../components/navbars/topbar'
import WelcomeBanner from '../components/banners/welcome-banner'
import styles from './information-technology.module.scss'

export default function ITPage() {
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
          <WelcomeBanner title='I.T. Center' />

          <div className={styles.twoColumn}>
            <div className={styles.left}>
              
            </div>
            <div className={styles.right}>
              <EmployeeSpotlight />
            </div>
          </div> 
        </div>
      </main>
    </div>
  )
}
