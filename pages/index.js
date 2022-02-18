import Head from 'next/head'
import Image from 'next/image'
import bannerPic from '../public/klvm1.jpg'
import lipcollectionPic from '../public/kvlmsunnys.jpg'

import lashesPic from '../public/homeprdtlashes.jpg'



export default function Home() {
  return (
    <div >
      <Head>
        <title>Next Ecommerce</title>
        <meta name="description" content="E-commerce store" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin= 'true' />

      </Head>

        <div>
          {/* mobile nav */}
        <h1 className='text-4xl tracking-tighter  font-bold'>KLMV COSMETICS</h1>
        <pre>By  Afeez</pre>
        </div>

        
        
       <div>
         {/* images to be gotten from cloudinary..banner */}
         <div>
         <Image
            src={bannerPic}
            alt="logo" 
            width={1216}
            height={350}
          />
         </div>
       </div>


       <div>

      {/* body of indexhtml */}
         <div>
         <Image
            src={lashesPic}
            alt="logo" 
            width={360}
            height={360}
          />
         </div>

         <div>
         <Image
            src={lipcollectionPic}
            alt="logo" 
            width={360}
            height={360}
          />
         </div>

       </div>

        
    </div>
  )
}
