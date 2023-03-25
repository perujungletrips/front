import Card from '@/components/card/Card'
import Carousel from '@/components/carousel/Carousel'
import Head from 'next/head'
import Image from 'next/image'

const images = [
  '/img_1.jpg',
  '/img_1.jpg',
  '/img_1.jpg',
  '/img_1.jpg',
  '/img_1.jpg',
  '/img_1.jpg',
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
        <div className=''>
          <div className='max-w-6xl m-auto my-10 overflow-hidden'>
            <Card imgUrl='/salkantay.png'/>
          </div>
          <div className='max-w-3xl m-auto'>
            <Carousel
              autoSlide={true}
              items={images.map((image_url, index) => 
                <Image
                  src={image_url}
                  key={index}
                  alt={'image'}
                  width={800}
                  height={533}
                  className='h-full w-full'
                />
              )} 
            />
          </div>
        </div>
      </main>
    </>
  )
}
