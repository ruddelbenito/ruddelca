import '@/styles/reset.css'
import '@/styles/globals.scss'
// Analytics imports
// import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </>
  )
}
