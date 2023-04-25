import '@/styles/reset.scss'
import '@/styles/globals.scss'
// Analytics imports
// import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/router'
import Nav from '@/components/nav'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <>
      {router.pathname !== '/' ? <Nav /> : <></>}
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </>
  )
}
