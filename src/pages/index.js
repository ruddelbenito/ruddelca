import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/index.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>ruddel.</title>
        <meta name="description" content="hi, i'm ruddel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <div className={styles.content}>
          <h1 className={styles.title}>hi, i'm ruddel</h1>

          <div className={styles.links}>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>
      </main>
    </>
  )
}
