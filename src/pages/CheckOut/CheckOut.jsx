import CheckOutOrderSummary from "./CheckOutRight/CheckOutOrderSummary"
import CheckOutShippingInfo from "./CheckOutLeft/CheckOutShippingInfo"



const CheckOut = () => {
  return (
    <div className='bg-main py-10 md:py-20'>
      <div className='w-main'>

        <h1 className='text-3xl md:text-6xl pb-10 md:pb-20'>Checkout</h1>

        <div className='flex gap-6 md:gap-16 md:flex-row flex-col'>
          <div className='bg-white  md:w-10/16 p-5 md:p-8 rounded-md'>
            <CheckOutShippingInfo />
          </div>
          <div className='bg-white  md:w-6/16 p-5 md:p-8 rounded-md'>
            <CheckOutOrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut