import Carousel from '@/components/carousel/Carousel'
import Head from 'next/head'
import Image from 'next/image'

const images = [
  <Image
    src={'/img_1.jpg'}
    key={'img_1'}
    alt={'img_1'}
    width={800}
    height={533}
    className='h-full w-full' 
  />,
  <Image
    src={'/img_2.jpg'}
    key={'img_2'}
    alt={'img_2'}
    width={800}
    height={533}
    className='h-full w-full' 
  />,
  <Image
    src={'/img_3.jpg'}
    key={'img_3'}
    alt={'img_3'}
    width={800}
    height={533}
    className='h-full w-full' 
  />,
]

export default function tour_example() {
  return (
    <>
      <Head>
        <title>tour</title>
        <meta name="description" content="Peru Jungle Trips tour" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <div className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
            <Carousel items={images} />
          </div>
        </div>
      </main>
    </>
  )
}
