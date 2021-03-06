import {useEffect, useState} from 'react'

import Announcements from '../components/sections/announcements'
import CompanyResources from '../components/sections/company-resources'
import EmployeeSpotlight from '../components/sections/employee-spotlight'
import Head from 'next/head'
import HomeNews from '../components/sections/home-news'
import PostLinkPlaceholder from '../components/placeholders/post-link-placeholder'
import Sidebar from '../components/navbars/sidebar'
import Topbar from '../components/navbars/topbar'
import WelcomeBanner from '../components/banners/welcome-banner'
import styles from './index.module.scss'
import Announcement from '../components/placeholders/announcement'

const intranetClient = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_INTRANET,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_INTRANET,
})
const websiteClient = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_WEBSITE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_WEBSITE,
})


export default function Home() {

  const fetchEntries = async () => {
    const intranetEntries = await intranetClient.getEntries({
      content_type: 'blogPost'
    })
    const webEntries = await websiteClient.getEntries({
      content_type: 'blogPost'
    })
    if (intranetEntries.items && webEntries.items) return intranetEntries.items, webEntries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const recentPosts = await fetchEntries()
      setPosts([...recentPosts])
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
              posts.length > 0 ? 
                <HomeNews posts={posts} />
                : 
                <div style={{display: 'flex'}}>
                  <PostLinkPlaceholder />
                  <PostLinkPlaceholder />
                </div>
            }
              <CompanyResources />
            </div>
            <div className={styles.right}>
              <EmployeeSpotlight  />
              {
                posts.length > 0 ?
                  <Announcements posts={posts}/>
                  :
                  <div>
                    <Announcement />
                  </div>

              }
              
  
            </div>
          </div> 
        </div>
      </main>
    </div>
  )
}
