import Head from 'next/head'
import Image from 'next/image'
import bannerPic from '../public/klvm1.jpg'
import lipcollectionPic from '../public/kvlmsunnys.jpg'
import lashesPic from '../public/homeprdtlashes.jpg'
import lotionPic from '../public/kvlmlotion.jpg'

import salesPic from '../public/kvlmsale.jpg'
import lippyPic from '../public/kvlmlippy.jpg'
import foundationPic from '../public/kvlmfoundation.jpg'
import thumbfoundationPic from '../public/kvlmprdtbnner2.jpg'

import thumbnailsPic from '../public/kvlmprdbnner3.jpg'

import thumblippyPic from '../public/kvlmprdbnner4.jpg'
import homepageproductPic from '../public/kvlmprdbanner.jpg'
import  {categories}  from '../data/products'
import Product from '../components/Product'



export default function Home({products}) { 
  return (
    <div >
      <Head>
        <title>Next Ecommerce</title>
        <meta name="description" content="E-commerce store" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
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

      {/* body of indexhtml grid of two rows 3 columns */}
      <div className="block md:grid grid-cols-3 gap-3">
        {
          products.map((category, index) => (
            <div  key={index}>
               <div>
                  <Image
                      src={`/${category.image}`}
                      alt="logo" 
                      width={360}
                      height={360}
                    />
                </div>
                <h1>{category.title}</h1>


            </div>
          ))
        }
         </div>

     

         {/* homepage product and thumb nails description start */}
         <div>

         <div>
           <Image
            src={ homepageproductPic}
            alt="logo" 
            width={360}
            height={360}
          />
         </div>
{/* thumbnail carousel start */}

         <div className='flex gap-x-1'>
         <div>
           <Image
            src={thumbnailsPic}
            alt="logo" 
            width={108}
            height={108}
          />
         </div>
         <div>
           <Image
            src={thumblippyPic}
            alt="logo" 
            width={108}
            height={108}
          />
         </div>
         <div>
           <Image
            src={thumbfoundationPic}
            alt="logo" 
            width={108}
            height={108}
          />
         </div>


         </div>
{/* thumbnail carousel end */}


         </div>



{/* homepage product and thumb nails description end */}

     {/* home product page descritpon start */}
         <div>
           <div>
           <h1 className='text-4xl tracking-tighter  font-bold'>KLMV HIGHLIGHTER PALETE</h1>
           <span>
             $32.00
           </span>
           <p>
             Pay in full or in  4 interest-free installments for orders beteen $50 and $3000 with
           </p>
           <div>
              <span>shop pay</span> 
              <a href="#">Learn more</a>
           </div>
           <form action="">
             <label htmlFor="quantity">Quantity</label>
             <input type="text" />
             <button>ADD TO CART</button>
             <button>BUY IT NOW</button>
           </form>
           

           <div>
             <p>Super Pigmented Highlighter palete</p>
             <p>$ beautigul sgade</p>
             <p>Will look bomb with any makeup look</p>
             <p>Shade names:</p>
             <p>Top left: Summer Nights</p>
             <p>Top Right:Sun kissed</p>
             <p>Bottom Leeft:Henny</p>
             <p>Bottom Right:Hot Girl</p>
             <p>Cruelty free</p>

             <p>Recyclable</p>
             <p>Caution and warning:Discontinue use if signs of irritation or rash appear.</p>
           </div>


           </div>
         </div>
     {/* home product page descritpon end */}
                  
      {/* Home page people also searched start */}



        {/* Home page people also searched start */}
       </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const products = categories.map(category => {
    return {
      title:category.title,
      image:category.image
    }
  })
  return {
    props: { products: products}

    
  }
}