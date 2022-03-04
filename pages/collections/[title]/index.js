import Link from "next/link";
import { useRouter } from "next/router";
import Product from "../../../components/Product";
import { collections } from "../../../data/products";

export default function Index({products}) {
  const router = useRouter();
  return (
    <div>
      <div className="space-y-4 my-6 relative">
          <h1 className="text-center font-bold text-4xl capitalize">{router.query.title}</h1>

          <div className="flex justify-center text-gray-500 text-sm capitalize ">
              <Link href='/'>
                <a className="mr-2">Home</a>
              </Link>
              /
              <Link href='/collections'>
                <a className="mx-2"> Collections</a>
              </Link>
              /
              <Link href={`/collections/${router.query.title}`}>
                <a className="ml-2"> {router.query.title}</a>
              </Link>
          </div>
          
          <div className="flex justify-center text-sm">
            <select id="filter" className="p-2  border border-gray-200 outline-0 rounded-sm ">
              <option value="Best Selling">Best Selling</option>
              <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
              <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
              <option value="Price, High to Low">Price, High to Low</option>
              <option value="Price, High to Low">Price, High to Low</option>
              <option value="Date, old to new">Date, old to new</option>
              <option value="Date, new to old">Date, new to old</option>
            </select>
          </div>
      </div>
     
      <div className="my-12">
        <Product products={products} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const title = context.params.title;
  const products = collections.filter(product => product.category === title)
  return {
    props: { products: products}
  }
}