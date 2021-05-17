import PostLink from '../cards/post-link'
import Title from '../banners/title'
import styles from './home-news.module.scss'

const HomeNews = () => {
    return (
        <div className={styles.HomeNews}>
            <Title content='Recent news' />
            <div className={styles.container}>
                <PostLink image={'patient.png'} />
                <PostLink image={'nurses.png'} />
            </div>
        </div>
    )
}

export default HomeNews