import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import styles from './post-link.module.scss'

//NEED TO REEVALUATE PROPS SCHEMA AND STRUCTURE COMPONENT ACCORDING TO CONTENTFUL AND NEXT
        // <Link href={`/news/${props.post.node.slug}`}>
        //     <a>
        //         <div className={styles.PostLink}>
        //             <div className={styles.categories}>
        //                 <p className={styles.category}>
        //                     {props.post.node.category}
        //                 </p>
        //             </div>
        //             <div className={styles.content}>
        //                 {props.post.node.title}
        //                 <br />
        //                 {props.post.node.date}
        //             </div>
        //             <div className={styles.overlay}></div>
        //             <img src={imageSrc} alt="Blog Post" width='320' height='250'/>
        //         </div>
        //     </a>
        // </Link>

const PostLink = (props) => {

    const { title, date, image, slug, category } = props;
    console.log(image.fields.file.url);

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