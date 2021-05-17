import Announcements from '../components/sections/announcements'
import Head from 'next/head'
import Sidebar from '../components/navbars/sidebar'
import Topbar from '../components/navbars/topbar'
import WelcomeBanner from '../components/banners/welcome-banner'
import styles from './blog.module.scss'

export default function BlogPage() {
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
          <WelcomeBanner title='The Latest' />

          <div className={styles.twoColumn}>
            <div className={styles.left}>
              
            </div>
            <div className={styles.right}>
              <Announcements />
            </div>
          </div> 
        </div>
      </main>
    </div>
  )
}
