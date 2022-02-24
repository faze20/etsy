import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import bannerPic from '../public/klvm1.jpg'
// import lipcollectionPic from '../public/kvlmsunnys.jpg'
// import lashesPic from '../public/homeprdtlashes.jpg'
// import lotionPic from '../public/kvlmlotion.jpg'

// import salesPic from '../public/kvlmsale.jpg'
// import lippyPic from '../public/kvlmlippy.jpg'
// import foundationPic from '../public/kvlmfoundation.jpg'
// import thumbfoundationPic from '../public/kvlmprdtbnner2.jpg'

// import thumbnailsPic from '../public/kvlmprdbnner3.jpg'

// import thumblippyPic from '../public/kvlmprdbnner4.jpg'
// import homepageproductPic from '../public/kvlmprdbanner.jpg'
import  {categories}  from '../data/products'



export default function Home({products}) { 
  return (
    <div >
      <Head>
        <title>Next Ecommerce</title>
        <meta name="description" content="E-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* images ........................................................banner */}
       <div className='h-64 mb-4 md:selection:mx-8'>
         <div  className='relative bg-black w-full h-full  '>
            <Image
            className='object-cover'
            src='/klvm1.jpg'
            alt="klmn cosmetics lippy" 
            layout='fill'
            objectFit='fill'
            />
              <div className='absolute text-center top-1/4 mx-20 md:mt-4 md:ml-20 md:h-24 md:w-56 md:mx-1  md:inset-x-1/3 '>

                <h2 className='font-bold text-4xl text-slate-50  mb-4' >
                  Perfect Lips Collection
                </h2>
              <span className=' text-white rounded bg-black py-2 px-1 '>
                <Link  href="shop">
                    <a className='m-4 '> Shop </a>
                    
                </Link>
              </span>
              </div>
         </div>
       </div>
{/* images.................................................... .banner end */}

        <h1 className='text-center text-3xl font-black my-6 p-4'>
          Shop
        </h1>



  <div>

{/* body of indexhtml grid of two rows 3 columns..starrt......................... */}
      <div className="block md:grid grid-cols-3 gap-3 md:place-items-center">
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
{/* body of indexhtml grid of two rows 3 columns...end........................ */}


     
<div className='block md:flex justify-between mt-8'>

{/* homepage product images and thumb nails images description start */}
         <div >
            <div>
              <Image
                src='/kvlmprdbanner.jpg'
                alt="logo" 
                width={500}
                height={500}
              />
            </div>
{/* homepage product image and thumb nails image description end............ */}

{/* thumbnail carousel start */}
            <div className='flex justify-center gap-x-4 mt-4 mx-8'>
                <div>
                  <Image
                    src='/kvlmprdbnner3.jpg'
                    alt="logo" 
                    width={108}
                    height={108}
                   
                  />
                </div>
                <div>
                  <Image
                    src='/kvlmprdbnner4.jpg'
                    alt="logo" 
                    width={108}
                    height={108}
                  />
                </div>
                <div>
                  <Image
                    src='/kvlmprdtbnner2.jpg'
                    alt="logo" 
                    width={108}
                    height={108}
                  />
                </div>
            </div>
{/* thumbnail carousel end */}
         </div>

{/* home product page descritpon start */}
         <div className='mt-6 grid grid-cols-1 place-items-center'>
           <div>

             <div className='text-center my-4'>
                <h1 className='text-4xl tracking-tighter mb-2 font-bold'>KLMV HIGHLIGHTER PALETE</h1>
                <span > $32.00 </span>
             </div>

           <div className='mx-4' >
              <p className=' text-xs text-justify'>
                Pay in full or in  4 interest-free installments for orders beteen $50 and $3000 with
                  <span className='mx-2'>shopPay</span> 
                  <a href="#">Learn more.</a>
              </p>
           </div>
           
           <form className='my-4' action="">

             <div className='flex my-14 justify-center'>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" className='border w-8 px-1 text-center' name="" id="" placeholder='1' />
             </div>

             <div className='flex flex-col md:flex-row  mx-16 my-6 md:mx-0 '>
             <button className="bg-gray-200 hover:bg-black  text-gray-800  py-4 md:py-2.5 md:px-20 border rounded shadow">
                ADD TO CART
            </button>
            <button className="bg-black  text-white  py-4 md:py-2.5 md:px-20 mt-6 md:mt-0 md:ml-4 border last:rounded shadow">
                BUY IT NOW
            </button>
            
             </div>

           </form>
           

           <div className='space-y-4 mt-4'>
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
</div>

                  
{/* Home page people also searched start */}
  <div >
{/* <div className='flex' >

    <div >
        <Image
             src='/klvm1.jpg'
            alt="logo" 
            width={360}
            height={360}
        />
    </div>
    <div >
        <Image
             src='/klvm1.jpg'
            alt="logo" 
            width={360}
            height={360}
        />
    </div>
    <div >
        <Image
             src='/klvm1.jpg'
            alt="logo" 
            width={360}
            height={360}
        />
    </div>
    <div >
        <Image
             src='/klvm1.jpg'
            alt="logo" 
            width={360}
            height={360}
        />
    </div>
    </div> */}


</div>



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