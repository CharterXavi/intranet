import Announcements from '../components/sections/announcements'
import Head from 'next/head'
import PostList from '../components/sections/post-list'
import Sidebar from '../components/navbars/sidebar'
import Topbar from '../components/navbars/topbar'
import WelcomeBanner from '../components/banners/welcome-banner'
import styles from './blog.module.scss'

export default function BlogPage({ posts }) {
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