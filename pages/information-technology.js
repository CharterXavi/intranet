import {useEffect, useState} from 'react'

import BulletinPost from '../components/sections/bulletin-post'
import EmployeeSpotlight from '../components/sections/employee-spotlight'
import Head from 'next/head'
import Sidebar from '../components/navbars/sidebar'
import Topbar from '../components/navbars/topbar'
import WelcomeBanner from '../components/banners/welcome-banner'
import styles from './information-technology.module.scss'

const intranetClient = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_INTRANET,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_INTRANET,
})

export default function ITPage() {

  const fetchBulletin = async () => {
    const bulletin = await intranetClient.getEntries({
      content_type: 'itBulletin'
    })
    if (bulletin.items) return bulletin.items[0]
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [bulletin, setBulletin] = useState(null)

  useEffect(() => {
    async function getPosts() {
      const foundBulletin = await fetchBulletin()
      setBulletin(foundBulletin)
    }
    getPosts()
  }, [])

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
              {
                bulletin ? 
                <BulletinPost bulletin={bulletin} />
                :
                null
              }
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
