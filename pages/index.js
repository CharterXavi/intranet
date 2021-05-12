import Head from 'next/head'
import Sidebar from '../components/navbars/sidebar'
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
        <Sidebar />
        <div className={styles.content}>
          <h1>Welcome to the Charter Intranet</h1>
        </div>
      </main>
    </div>
  )
}
