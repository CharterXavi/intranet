import Image from 'next/image'
import Link from 'next/link'
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
    return (
        <Link href='/'>
            <a className={styles.PostLink}>
                <div className={styles.wrapper}>
                    <div className={styles.categories}>
                        <p className={styles.category}>
                            Health
                        </p>
                    </div>
                    <div className={styles.content}>
                        Title of an Article
                        <br />
                        1/1/2021
                    </div>
                    <div className={styles.overlay}></div>
                    <Image src='/nurses.png' alt="Blog Post" layout='fill' className={styles.image} />
                </div>
            </a>
        </Link>
    )
};

export default PostLink