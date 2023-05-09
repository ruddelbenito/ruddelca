import styles from '@/styles/footer.module.scss'
import InstagramIcon from '../../public/assets/svgs/instagram.svg'
import GithubIcon from '../../public/assets/svgs/github.svg'
import LinkedInIcon from '../../public/assets/svgs/linkedin.svg'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <p>ruddel 2023</p>
                <div className={styles.icons}>
                    <a href='https://www.instagram.com/ruddel.ca/' target='_blank' rel='noreferrer'><InstagramIcon className={styles.instagram} /></a>
                    <a href='https://github.com/ruddelbenito' target='_blank' rel='noreferrer'><GithubIcon className={styles.github} /></a>
                    <a href='https://www.linkedin.com/in/russel-benito-284261226/' target='_blank' rel='noreferrer'><LinkedInIcon className={styles.linkedin} /></a>
                </div>
            </div>
        </div>
    )
}