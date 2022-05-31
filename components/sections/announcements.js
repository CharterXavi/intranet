import Title from '../banners/title'
import {motion} from 'framer-motion'
import styles from './announcements.module.scss'
import Announcment from '../placeholders/announcement'



const Announcements = (props) => {
    console.log(props.posts)

    const {posts} = props;

    return (
        <div className={styles.Announcements}>
            <Title content='Announcements' />
            <motion.div className={styles.container}
            initial={{ rotate: 330, scale: 0, opacity: 0 }}
            animate={{ 
                rotate: 360, 
                scale: 1, 
                opacity: 1
            }}
            transition={{ 
                type: 'spring',
                duration: 0.4
            }}
            >
                <Announcment
                    title={posts[0].fields.title}
                />
                <Announcment
                    title={posts[1].fields.title}
                />
            </motion.div>
        </div>
    )
    
}
export default Announcements

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

