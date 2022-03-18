import  {collections}  from '../data/products'
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';


function Shop({products}) {
    const dispatch = useDispatch();

  return (
    <div>
      <div className="block md:grid grid-cols-3 gap-3 md:place-items-center">
            {
              products.map((product, index) => (
                <div  key={index} className='rounded-sm'>
                    <div className='relative'>
                        <Image
                            src={`/${product.image}`}
                            alt="logo" 
                            width={360}
                            height={360}
                          />
                          <div className='absolute top-1/3  right-0 left-0 flex justify-center'>

                          <button 
                          onClick={() => dispatch(addToCart(product))}
                          className=' bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ' >
                            Add to cart
                          </button>
                          </div>
                    </div>
                  <h3>{product.name}</h3>
                </div>
              ))
            }
      </div>

    </div>

  )
}

export default Shop


export async function getStaticProps() {
  const products = collections.map(collection => {
    return {
      id:collection.id,
      name:collection.name,
      image:collection.image,
      price:collection.price,
      category:collection.category
    }
  })
  return {
    props: { products: products}

    
  }
}