import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/index.module.scss'
import InstagramIcon from '../../public/assets/svgs/instagram.svg'
import GithubIcon from '../../public/assets/svgs/github.svg'
import LinkedInIcon from '../../public/assets/svgs/linkedin.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>ruddel.</title>
        <meta name="description" content="hi, i'm ruddel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.index}>
        <div>
          <div className={styles.header}>
            <h1>RUDDEL</h1>
            <div className={styles.socials}>
              <a href='https://www.instagram.com/ruddel.ca/' target='_blank' rel='noreferrer'><InstagramIcon /></a>
              <a href='https://github.com/ruddelbenito' target='_blank' rel='noreferrer'><GithubIcon /></a>
              <a href='https://www.linkedin.com/in/russel-benito-284261226/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
            </div>
          </div>

          <div className={styles.navigation}>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/contact'>Contact</Link>
            <p className={styles.aboutOverlayText}>u</p>
            <div className={styles.aboutOverlayBackground}></div>
            <p className={styles.projectsOverlayText}>r</p>
            <div className={styles.projectsOverlayBackground}></div>
          </div>
        </div>
      </main>
    </>
  )
}
