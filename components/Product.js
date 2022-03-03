import Image from 'next/image'
import Link from 'next/link'


function Product({products}) {
  return (
      <div className="grid gap-4 grid-cols-4">

          {products.map((product, index) => (
              <div key={index} >
                    <div className='relative'>
                        <div >

                        <Image
                            src={`/${product.image}`}
                            
                            alt="logo" 
                            width={360}
                            height={360}
                        />
                        </div>
                        <div className='bg-black -z-1 hover:z-50 absolute w-full h-full  inset-0 text-center cursor-pointer transition ease-in-out delay-150  duration-300'>
                            <Link href='#'>
                            <a className='bg-white p-4'>
                            Quick Shop

                            </a>
                            </Link>
                        </div>
                    </div>
                    <div className='text-center space-y-2'>

                    <h1>{product.name}</h1>

                    <h3>{product.price}</h3>
                    </div>
              </div>
          )
           
            )}
      </div>
   
  )
}

export default Product
{/* <div>
<Image
   src={bannerPic}
   alt="logo" 
   width={1216}
   height={350}
 />
</div> */}