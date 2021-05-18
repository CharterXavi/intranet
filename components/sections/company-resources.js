import {BookIcon, CheckboxIcon, GearsIcon, HealthcareIcon, HeartIcon, HomeIcon, InternIcon, NetworkIcon, SocialIcon} from 'unify-design-icons'

import ResourceCard from '../cards/resource-card'
import Title from '../banners/title'
import styles from './company-resources.module.scss'
import {useState} from 'react'

const CompanyResources = () => {

    const [resources, setResources] = useState([
        {
            title: 'Charter Learning Center',
            description: 'Manage your licenses, certifications, courses, and assignments in Relias',
            link: 'https://charterhcg.training.reliaslearning.com/',
            icon: <BookIcon className={styles.icon} />
        },
        {
            title: 'Office 365',
            description: 'Log in to your Microsoft Office account to access email (Outlook) and other Microsoft office apps',
            link: 'https://www.office.com/',
            icon: <SocialIcon className={styles.icon} />
        },
        {
            title: 'I.T. Helpdesk',
            description: 'Need help with a device or other technology? Submit a ticket here',
            link: 'https://workforcenow.adp.com/theme/index.html',
            icon: <NetworkIcon className={styles.icon} />
        },
        {
            title: 'H.R. Forms',
            description: 'Quickly access the H.R. forms library in SharePoint',
            link: 'https://workforcenow.adp.com/theme/index.html#/ResourcesTab_ttd_formsLibrary/formsLibrary',
            icon: <CheckboxIcon className={styles.icon} />
        },
        {
            title: 'Orientation Resources',
            description: 'Quickly access training materials for orientation and training',
            link: 'https://charterhcg.sharepoint.com/sites/Training',
            icon: <InternIcon className={styles.icon} />
        },
        {
            title: 'Devero - HOSPICE',
            description: 'Access the Devero platform for the Hospice organization',
            link: 'https://charterhospice.devero.com/',
            icon: <HeartIcon className={styles.icon} />
        },
        {
            title: 'Devero - TCM/HARP',
            description: 'Access the Devero platform for the TCM / HARP organization',
            link: 'https://chartertcm.devero.com/',
            icon: <GearsIcon className={styles.icon} />
        },
        {
            title: 'Devero - PALLIATIVE',
            description: 'Access the Devero platform for the Palliative Care organization',
            link: 'https://charterpalliative.devero.com/',
            icon: <HealthcareIcon className={styles.icon} />
        },
        {
            title: 'Devero - HOME HEALTH',
            description: 'Access the Devero platform for the Home Health organization',
            link: 'https://charterhh.devero.com/',
            icon: <HomeIcon className={styles.icon} />
        },
    ])
    
    return (
        <div className={styles.CompanyResources}>
            <Title content='Company Resources' />
            <div className={styles.container}>
                {
                    resources.map(item => {
                        return <ResourceCard description={item.description} title={item.title} link={item.link} icon={item.icon} key={item.title} />
                    })
                }
            </div>
        </div>
    )
}

export default CompanyResources