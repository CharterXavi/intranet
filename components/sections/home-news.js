import PostLink from '../cards/post-link'
import Title from '../banners/title'
import styles from './home-news.module.scss'

const HomeNews = (props) => {

    const { title, date, image, slug, tags, category } = props.posts[0].fields
    
    return (
        <div className={styles.HomeNews}>
            <Title content='Recent news' />
            <div className={styles.container}>
                <PostLink 
                    title={title}
                    date={date}
                    image={image}
                    slug={slug}
                    tags={tags}
                    category={category}
                />

            </div>
        </div>
    )
}

export default HomeNews