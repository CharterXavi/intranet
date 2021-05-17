import './post-link.module.scss'

import Link from 'next/link'

//NEED TO REEVALUATE PROPS SCHEMA AND STRUCTURE COMPONENT ACCORDING TO CONTENTFUL AND NEXT

const PostLink = (props) => {
    return (
        <Link href={`/news/${props.post.node.slug}`}>
            <a>
                <div className={styles.PostLink}>
                    <div className={styles.categories}>
                        <p className={styles.category}>
                            {props.post.node.category}
                        </p>
                    </div>
                    <div className={styles.content}>
                        {props.post.node.title}
                        <br />
                        {props.post.node.date}
                    </div>
                    <div className={styles.overlay}></div>
                    <img src={imageSrc} alt="Blog Post" width='320' height='250'/>
                </div>
            </a>
        </Link>
    )
};

export default PostLink