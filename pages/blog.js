import {useEffect, useState} from 'react'

import Announcements from '../components/sections/announcements'
import Head from 'next/head'
import PostList from '../components/sections/post-list'
import Sidebar from '../components/navbars/sidebar'
import Topbar from '../components/navbars/topbar'
import WelcomeBanner from '../components/banners/welcome-banner'
import styles from './blog.module.scss'
import BulletinPost from '../components/sections/bulletin-post'

const intranetClient = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_INTRANET,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_INTRANET,
})


export default function BlogPage({ posts }) {
  const fetchBulletin = async () => {
    const bulletin = await intranetClient.getEntries({
      content_type: 'blogPost'
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
          <WelcomeBanner title='The Latest' />

          <div className={styles.twoColumn}>
            <div className={styles.left}>
              <PostList posts={posts} />
              {
                bulletin ? 
                <BulletinPost bulletin={bulletin} />
                :
                null
              }
            </div>
            <div className={styles.right}>
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

export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_INTRANET,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_INTRANET,
  })

  // Fetch all entries of content_type `blogPost`
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items)

  return {
    props: {
      posts,
    },
  }
}