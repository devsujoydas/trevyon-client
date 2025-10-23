import CheckOutOrderSummary from "./CheckOutOrderSummary"
import CheckOutShippingInfo from "./CheckOutShippingInfo"



const CheckOut = () => {
  return (
    <div className='bg-main py-20'>
      <div className='w-main'>

        <h1 className=' text-3xl md:text-6xl pb-20'>Checkout</h1>

        <div className='flex gap-16'>
          <div className='bg-white  w-10/16 p-5 md:p-8 rounded-md'>
            
            <CheckOutShippingInfo />
          </div>
          <div className='bg-white  w-6/16 p-5 md:p-8 rounded-md'>
            <CheckOutOrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut