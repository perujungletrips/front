import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({subsets:['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
