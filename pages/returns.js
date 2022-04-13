import { useState } from 'react'

const ploicies ={
    "h1": "Returns Policy",
    "h1": "Returns Policy",
    "h1": "Returns Policy",
    "h1": "Returns Policy",
    "p1": " We hope you love your purchases but if for any reason you do need  to return something to us,send your item back within 14 days of"
          

}

function Returns() {
  return (
    <div>
        <div>
            <div className='my-4 bg-zinc-200 rounded' >
                <div className='flex flex-col lg:flex-row mx-1 justify-between items-center lg:mx-24'>
                   
                    <div className='w-80'>
                        <div className='my-4'>
                            <label htmlFor="categories">Select Category</label>
                        </div>
                        <select className='mb-4 p-2 rounded-md w-full ' name="categories" id="categories">
                            <option value="">Returns &amp; Refund</option>
                            <option value="technical">Technical</option>
                            <option value="General">General Information</option>
                            <option value="delivery">Delivery</option>
                            <option value="orders">Orders</option>
                            <option value="returns">Returns &amp; Refund </option>
                        </select>
                    </div> 
                    <div  className='w-80 mb-4 lg:mb-0'>
                        <div className='my-4'>
                            <label htmlFor="search">Search</label>
                        </div>
                        <div className='flex items-center border-b border-gray-400'>
                            <input
                             className=' bg-zinc-200 mr-4 w-full pb-2'
                              type="text"
                               placeholder='Search by typing keywords...' />
                            &#128269;
                        </div>
                    </div>

                </div>

            </div>


            <div className='mx-1 lg:mx-24'>
               
                <div>
                   <h2>Returns Policy </h2>
                    <p>
                    We hope you love your purchases, but if for any reason you do need
                     to return something to us, send your item back within 14 days of
                      receiving the product to the address below. No exchanges at this time! 
                      Include your order number on the outside of the package!
                      </p>
                    <address>
                        Afeez Fashion Cosmetics

                        ATTN: Returns

                        20630 Felicia St

                        Menifee, CA 92586
                        
                    </address>
                        <p>
                        Please allow 5&#8211; ­7 business days from when the item is delivered for 
                         returned order to be processed. You will be notified via email at the
                          email address listed on your account when your order was placed. 
                          Please note that your banking institution may require additional 
                          time to process and post this transaction to your account once they 
                          have received the information from us (typically 3-5 business days).

                        We can only issue a refund to the original form of payment used at the 
                        point of purchase. In the event you no longer have access to this account
                         or it is no longer active, we will then process your refund in the form 
                         of a check mailed to the address in your customer profile which can take
                          4-6 weeks to process.Original shipping charges are nonrefundable.
                    </p>

                </div>
                <div>
                    <h2>What do you do with returned products?</h2>
                    <p>
                    They go directly to makeup heaven.
                    </p>
                </div>
                <div>
                    <h2>Where do you ship from?</h2>
                    <p>
                    Los Angeles, California
                    </p>
                </div>
                <div>
                    <h2>How many items can I order per month?</h2>
                    <p>
                    Please note that all of our products are limited to 2 PER each shade (or item) for every PERSON per month unless otherwise stated. Our store is setup to block any orders that contain more than this quantity for a product, however if you exceed this limit, your order will be automatically cancelled and refunded in full.

                    We do this to ensure that everyone has a fair chance to enjoy these products, so please be mindful of this!!

                    </p>
                </div>
                <div>
                <h2>How much is shipping?</h2>
                    <p>
                    All shipping rates will vary depending on a few different factors, some of which include:

Domestic vs International shipments
Total weight of package
Selected shipping method
We ARE NOT RESPONSIBLE for ANY fees required by customs for any reason. All shipping fees we require will be clearly shown to you alongside the service and estimated transit time upon checkout.

Free shipping for domestic orders over $125 and international orders over $175!
                        
                    </p>
                </div>
                <div>
                <h2>How long does shipping take?</h2>
                    <p>
                    Our hours of operation for shipping are Monday through Friday, 8 a.m. to 6 p.m. PST, excluding weekends and major USA holidays. Orders will ship 1­-2 business day after you order. *NOTE: These timelines do not apply during restocks, new releases & special promotions. Please refer to your order confirmation email for specific shipping details!

Transit times will vary based upon a few different conditions, including but not limited to:
Total distance between us and you
Whether your parcel is a domestic (USA) or international (everywhere else) shipment
What delivery method you select
ESTIMATED transit times are as follows. Please note that this time frame is an estimate and not a guarantee.

DOMESTIC:
First Class: 7-10 Business Days
Priority Mail: 5-7 Business Days
FedEx Ground: 3-5 Business Days ($100 worth of insurance included)
FedEx 2 Day: 2 Business Days (Guaranteed transit time, $100 worth of insurance included)

UPS Ground: 2-5 business days ($100 insurance included)

INTERNATIONAL (Does NOT account for time spent at customs, border inspection facilities, etc):
Standard Post (DHL eCommerce): 3-8 Business Days ($100 insurance included)

DHL eCommerce International Priority 4-12 Business Days ($100 insurance included)
UPS Worldwide Expedited 2-5 business days ($100 insurance included)

Any inquiries regarding the exact location of your package should be made to the carrier directly. Our customer service agents only have as much information as can be seen by you through your tracking number.

                        
                    </p>
                </div>
                <div>
                <h2>How do I track my order?</h2>
                    <p>
                    Please allow between 1-2 Business Days for your tracking number to update once you receive your tracking number by email.
If you don't see the email in your inbox try checking your spam folder or add customerservice@jeffreestarcosmetics.com to your safe sender’s list.

Our makeup is manufactured in Los Angeles with no imported ingredients.
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Returns



