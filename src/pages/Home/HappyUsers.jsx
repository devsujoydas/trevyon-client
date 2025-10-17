import happyUserImg1 from '../../assets/happy_user/happy_User_1.png'
import happyUserImg2 from '../../assets/happy_user/happy_User_2.png'
import { IoStar } from "react-icons/io5";

const happyUserCard = ({img, name, comment}) => {
  return (
    <div className='flex gap-10'>
      <div className='w-1/3'>
        <img src={img} alt="" />
      </div>

      <div className='w-2/3 flex flex-col justify-between py-5'>
        <div>
          <div className='text-[#F092B0] flex items-center gap-0.5 text-2xl pb-5'>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
          <p className='text-lg'>"{comment}"</p>
        </div>
        <h1 className='font-semibold text-xl text-zinc-600'>{name}</h1>
      </div>
    </div>
  )
}

const HappyUsers = () => {

  const happyUserData = [
    {
      img: `${happyUserImg1}`,
      name: "Devon Lane",
      comment: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    },
    {
      img: `${happyUserImg2}`,
      name: "Devon Leony",
      comment: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    },
  ]

  return (
    <div className='w-main py-5 md:py-14'>
      <div className='text-center'>
        <p className='text-lg mb-3'>3940+ Happy Users</p>
        <h1 className='text-[#C7A18A] font-bold text-xl md:text-[40px]'>Don’t just take our words</h1>
      </div>

      <div className='grid grid-cols-2 gap-14 py-14'>
        {happyUserData.map(happyUser => happyUserCard(happyUser))}
      </div>
    </div>
  )
}

export default HappyUsers