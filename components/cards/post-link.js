import Link from 'next/link'
import {motion} from 'framer-motion'
import styles from './post-link.module.scss'

const PostLink = (props) => {

    const { title, date, image, slug, category } = props;

    return (
        <Link href={`/${slug}`}>
            <motion.a className={styles.PostLink}
            initial={{ opacity: 0 }}
            animate={{  
                opacity: 1
            }}
            transition={{ 
                type: 'spring',
                duration: 0.4
            }}
            >
                <div className={styles.wrapper}>
                    <div className={styles.categories}>
                        <p className={styles.category}>
                            {category}
                        </p>
                    </div>
                    <div className={styles.content}>
                        {title}
                        <br />
                        {date}
                    </div>
                    <div className={styles.overlay}></div>
                    <img src={`https:${image.fields.file.url}`} alt="Blog Post" className={styles.image} />
                </div>
            </motion.a>
        </Link>
    )
};

export default PostLink