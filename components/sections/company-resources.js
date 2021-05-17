import ResourceCard from '../cards/resource-card'
import Title from '../banners/title'
import styles from './company-resources.module.scss'

const CompanyResources = () => {

    const description = 'This is a description!'
    const title = 'Resource Card'
    const link = '/'
    
    return (
        <div className={styles.CompanyResources}>
            <Title content='Company Resources' />
            <div className={styles.container}>
                <ResourceCard description={description} title={title} link={link} />
                <ResourceCard description={description} title={title} link={link} />
                <ResourceCard description={description} title={title} link={link} />
                <ResourceCard description={description} title={title} link={link} />
                <ResourceCard description={description} title={title} link={link} />
                <ResourceCard description={description} title={title} link={link} />
                <ResourceCard description={description} title={title} link={link} />
                <ResourceCard description={description} title={title} link={link} />
                <ResourceCard description={description} title={title} link={link} />
            </div>
        </div>
    )
}

export default CompanyResources