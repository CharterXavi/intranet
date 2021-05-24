import Announcements from '../../components/sections/announcements'
import Head from "next/head"
import Post from "../../components/sections/post"
import Sidebar from '../../components/navbars/sidebar'
import Topbar from '../../components/navbars/topbar'
import WelcomeBanner from '../../components/banners/welcome-banner'
import styles from '../blog.module.scss'

export default function Slug({ post }) {
  return (
    <div>
        <Head>
          <title>{post.fields.title} || Charter Intranet</title>
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
                post ? 
                  <Post post={post} />
                  : 
                  <div style={{display: 'flex'}}>
                    <PostLinkPlaceholder />
                    <PostLinkPlaceholder />
                  </div>
              }
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

export async function getStaticProps(context) {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_INTRANET,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_INTRANET,
  })

  // Fetch all results where `fields.slug` is equal to the `slug` param
  const result = await client
    .getEntries({
      content_type: "blogPost",
      "fields.slug": context.params.slug,
    })
    .then((response) => response.items)

  // Since `slug` was set to be a unique field, we can be confident that
  // the only result in the query is the correct post.
  const post = result.pop()

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!post) {
    return { props: {} }
  }

  // Return the post as props
  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_INTRANET,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_INTRANET,
  })

  // Query Contentful for all blog posts in the space
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items)

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const paths = posts.map(({ fields: { slug } }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}