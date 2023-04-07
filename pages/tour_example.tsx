import Excursion from '@/components/excursion/Excursion'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import 'react-datepicker/dist/react-datepicker.css'

export default function tour_example() {
  return (
    <Layout>
      <Head>
        <title>Peru Jungle Trips</title>
      </Head>
      <main>
        <div className='content max-w-6xl lg:max-w-screen-2xl m-auto'>
          <Excursion />
        </div>
      </main>
    </Layout>
  )
}
