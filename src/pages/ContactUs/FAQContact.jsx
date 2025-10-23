
import contactFaq from '../../assets/contact/contact_us_faq.png'
import { useState } from 'react'

const FaqCard = () => {
    const [openFaq, setOpenFaq] = useState(false)

    return (
        <div onClick={() => setOpenFaq(!openFaq)} className='cursor-pointer'>
            <h1 className='font-semibold text-lg md:text-2xl mb-2 md:mb-5'>Figma ipsum component variant main layer.?</h1>

            <p className={`${openFaq ? "h-fit opacity-100 transition-all duration-500" : "h-0 opacity-0 transition-all "} text-sm md:text-xl`}>Figma ipsum component variant main layer. Line ellipse object list undo rectangle duplicate editor distribute overflow. Arrow pen union device share scrolling style. Ipsum arrow flows shadow horizontal inspect reesizing reesizing arrange. Figma layer slice bold invite outline polygon rotate library. Arrange shadow outline plugin undo. Invite distribute draft plugin pencil scale polygon invite pencil pixel. Connection bold component star hand star horizontal.</p>
            <hr className='my-3' />
        </div>
    )
}

const FAQContact = () => {

    return (
        <div className='w-main py-10 md:py-20'>
            <div className='flex gap-5 md:gap-20 md:flex-row flex-col py-5 md:py-14 '>
                <div className=' w-full'>
                    <img className='w-full object-center' src={contactFaq} alt="" />
                </div>
                <div className=' w-full'>
                    <h1 className=' text-2xl md:text-3xl font-semibold pb-1 md:pb-5'>Frequently Asked Questions</h1>
                    <p className=' text-lg md:text-xl'>Find answers to our most commonly asked questions. If you can't find what you're looking for, please contact us.</p>

                    {/* FAQ Part */}
                    <div className=' py-5 md:py-10'>
                        <FaqCard />
                        <FaqCard />
                        <FaqCard />
                        <FaqCard />
                        <FaqCard />
                        <FaqCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQContact