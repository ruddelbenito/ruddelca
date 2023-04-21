import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>ruddel.</title>
        <meta name="description" content="hi, i'm ruddel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>hi, i'm ruddel</h1>

          <img
            src='./images/ty-lue.jpg'
            alt='ty lue stupid ass face'
            className={styles.image}
          />

          <p className={styles.flavourText}>Sorry, but there's not a whole lot happening here just yet. Check again soon.</p>
        </div>
      </main>
    </>
  )
}
