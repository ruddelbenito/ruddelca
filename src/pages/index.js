import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>ruddel.</title>
        <meta name="description" content="hi, i'm ruddel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>hi, I'm ruddel</h1>

          <div>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>
      </main>
    </>
  )
}
