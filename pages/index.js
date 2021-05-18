import {useEffect, useState} from 'react'

import Announcements from '../components/sections/announcements'
import CompanyResources from '../components/sections/company-resources'
import EmployeeSpotlight from '../components/sections/employee-spotlight'
import Head from 'next/head'
import HomeNews from '../components/sections/home-news'
import Sidebar from '../components/navbars/sidebar'
import Topbar from '../components/navbars/topbar'
import WelcomeBanner from '../components/banners/welcome-banner'
import styles from './index.module.scss'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})


export default function Home() {

  const fetchEntries = async () => {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
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
          <WelcomeBanner title='Welcome to Charter Intranet!' />

          <div className={styles.twoColumn}>
            <div className={styles.left}>
            {
              posts.length > 0
              ? <HomeNews posts={posts} />
              : null
            }
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
