import Product from '../components/Product'
import  {collections}  from '../data/products'



function shop({products}) {
  return (
    <Product products={products} />

  )
}

export default shop

export async function getServerSideProps(context) {
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