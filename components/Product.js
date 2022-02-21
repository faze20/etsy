import Image from 'next/image'


function Product({products}) {
  return (
      <div className="block md:grid grid-cols-4 gap-4">

          {products.map((product, index) => (
              <div key={index} >
                    <h1>{product.name}</h1>
                    <div>
                        <Image
                            src={`/${product.image}`}

                            alt="logo" 
                            width={360}
                            height={360}
                        />
                    </div>
                    <h3>{product.price}</h3>
                    <h4>{product.category}</h4>
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