import contactHero from '../../assets/contact/contact_us_hero.png'
import contactFaq from '../../assets/contact/contact_us_faq.png'

const GetInTouch = () => {
    return (
        <div className='w-main py-20'>
            <h1 className='font-semibold text-6xl'>Contact Us</h1>

            <div className='flex gap-20 py-14 '>
                <div className=' w-full'>
                    <h1 className='text-3xl font-semibold py-10'>Get in Touch</h1>
                    <p className='text-xl'>Have a question or need assistance? Fill out the form below and our team will get back to you as soon as possible.</p>

                    <form action="" className='py-10 space-y-10'>
                        <div className=' space-y-5'>
                            <div className="">
                                <label className="block text-sm text-gray-700 font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text" placeholder=""
                                    className={`w-full border-2 rounded-md p-4 outline-none  border-zinc-400`}
                                />
                            </div>
                            <div className="">
                                <label className="block text-sm text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="text" placeholder=""
                                    className={`w-full border-2 rounded-md p-4 outline-none border-zinc-400`}
                                />
                            </div>
                            <div className="">
                                <label className="block text-sm text-gray-700 font-medium mb-2">
                                    How can we help
                                </label>
                                <textarea
                                    type="text" placeholder=""
                                    rows={6}
                                    className={`w-full border-2 rounded-md p-4 outline-none  border-zinc-400 `}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full md:w-auto px-10 py-4 hover:bg-black hover:text-white text-black rounded-full cursor-pointer border hover:border-transparent border-black active:scale-95 transition text-lg"
                            >
                                Let Us Know
                            </button>
                        </div>
                    </form>
                </div>
                <div className=' w-full'>
                    <img className='w-full object-center' src={contactHero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch