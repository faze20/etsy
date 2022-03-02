import Link from "next/link";
import { useRouter } from "next/router";
import Product from "../../../components/Product";
import { collections } from "../../../data/products";

export default function Index({products}) {
  const router = useRouter();
  return (
    <div>
      <h1>Welcome to my blog</h1>
      <h2>{router.pathname}</h2>

      <div className="flex  text-7xl">
        <Link href='/collections'>
          <a> Collections</a>
        </Link>
        /
        <Link href={`/collections/${router.query.title}`}>
          <a> {router.query.title}</a>
        </Link>


      </div>
      <div>
      Shop {router.query.id} <br />
       look out for : {router.query.title}
      </div>

      <div>
        <Product products={products} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // console.log(router.query.title);
  const products = collections.filter(product => product.category==='eyes')
  console.log(products);
  return {
    props: { products: products}

    
  }
}