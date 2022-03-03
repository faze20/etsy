import Link from 'next/link'
import Image from 'next/image'
import  {categories}  from '../../data/products'


// link has to be the title

function index({products}) {
  return (
    <div className="grid  gap-4 grid-cols-3">

    {products.map((product, index) => (
        <div className='mx-12' key={index} >
          <Link href={`collections/${product.title}`} passHref>
              <div className='relative hover:brightness-50 transition duration-500 ease-in-out cursor-pointer'>
                  <Image
                      src={`/${product.image}`}
                      alt="logo" 
                      width={360}
                      height={360}
                      // layout="responsive"

                  />
                 <h1 className='absolute top-1/4 text-center right-0 left-0 text-white text-7xl'>{product.title}</h1>

              </div>
          </Link>
             
        </div>
    )
     
      )}
</div>
  )
}

export default index

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