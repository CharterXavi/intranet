import Title from '../banners/title'
import WebPostLink from '../cards/web-post-link'
import styles from './home-news.module.scss'

const HomeNews = (props) => {
    console.log(props.posts);
    
    const {posts} = props;
    
    return (
        <div className={styles.HomeNews}>
            <Title content='Recent news' />
            <div className={styles.container}>
                <WebPostLink 
                    title={posts[0].fields.title}
                    date={posts[0].fields.date}
                    image={posts[0].fields.image}
                    slug={posts[0].fields.slug}
                    tags={posts[0].fields.tags}
                    category={posts[0].fields.category}
               />
                <WebPostLink 
                    title={posts[1].fields.title}
                    date={posts[1].fields.date}
                    image={posts[1].fields.image}
                    slug={posts[1].fields.slug}
                    tags={posts[1].fields.tags}
                    category={posts[1].fields.category}
               />
            </div>
        </div>
    )
}

export default HomeNews