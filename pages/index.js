import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Next Ecommerce</title>
        <meta name="description" content="E-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div>
          {/* messages for promo and shipping */}
          <div>
            <p>
              Every order gets a freebie item!! KLMV Cosmetics only doing US and Canada shipping at the moment 
            </p>
          </div>
        </div>
        <div>
        {/* cart section */}
          CART (0)
        </div>

        <div>
          {/* mobile nav */}
        <h1 className='text-lg tracking-wide'>KLMV COSMETICS</h1>
        <p>By  Afeez</p>
        </div>

        </main>
        
    </div>
  )
}
