import '@/styles/reset.scss'
import '@/styles/globals.scss'
// Analytics imports
// import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/router'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/' ? <Nav /> : <></>}
      <Component {...pageProps} />
      {/* <Analytics /> */}
      {router.pathname !== '/' ? <Footer /> : <></>}
    </>
  )
}
