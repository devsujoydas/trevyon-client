import { ChevronDown, ChevronUp, Search, ShoppingBag, User } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [showSkinCareDropDown, setShowSkinCareDropDown] = useState(false)
  const [showCollectionsDropDown, setShowCollectionsDropDown] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='border-b border-zinc-200'>
      <div className='flex items-center justify-between max-w-screen-2xl mx-auto py-10 '>

        <div className='flex items-center gap-14 '>
          <div>
            <Link to={"/"} className='font-family-third text-2xl'>TREVYON</Link>
          </div>

          <div className='flex items-center gap-10'>
            <NavLink to={""}
              onMouseEnter={() => setShowSkinCareDropDown(true)}
              onMouseLeave={() => setShowSkinCareDropDown(false)}
              className={`flex items-center gap-1 relative`}>
              Skincare {showSkinCareDropDown ? <ChevronUp /> : <ChevronDown />}
              {showSkinCareDropDown &&
                <div
                  onMouseEnter={() => setShowSkinCareDropDown(true)}
                  onMouseLeave={() => setShowSkinCareDropDown(false)}
                  className='absolute top-7 -left-5 w-80  border border-zinc-200 flex justify-between bg-white rounded-sm p-5 '
                >
                  <div className='flex flex-col gap-3'>
                    <Link to={""}>Cleansers</Link>
                    <Link to={""}>Essences</Link>
                    <Link to={""}>Moisturizers</Link>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <Link to={""}>Toners</Link>
                    <Link to={""}>Serums</Link>
                    <Link to={""}>Masks</Link>
                  </div>
                </div>
              }
            </NavLink>

            <NavLink to={""}
              onMouseEnter={() => setShowCollectionsDropDown(true)}
              onMouseLeave={() => setShowCollectionsDropDown(false)}
              className={`flex items-center gap-1 relative`}>
              Collections {showCollectionsDropDown ? <ChevronUp /> : <ChevronDown />}
              {showCollectionsDropDown &&
                <div
                  onMouseEnter={() => setShowCollectionsDropDown(true)}
                  onMouseLeave={() => setShowCollectionsDropDown(false)}
                  className='absolute top-7 -left-5 w-80  border border-zinc-200 flex justify-between bg-white rounded-sm p-5 '
                >
                  <div className='flex flex-col gap-3'>
                    <Link to={""}>Hydration</Link>
                    <Link to={""}>Anti-Aging</Link>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <Link to={""}>Brightening</Link>
                    <Link to={""}>Sensitive Skin</Link>
                  </div>
                </div>
              }
            </NavLink>

            <NavLink to={""}>About</NavLink>
            <NavLink to={""}>Contact</NavLink>
          </div>
        </div>

        <div className='flex items-center gap-8  '>
          {showSearch ?
            <div className='cursor-pointer border border-zinc-400 rounded-full flex items-center gap-2 py-2 px-3 w-full'>
              <Search onClick={() => setShowSearch(false)} />
              <input type="text" placeholder='Search' className='outline-none  h-full w-96' />
            </div>
            :
            <button onClick={() => setShowSearch(true)} className='cursor-pointer'>
              <Search />
            </button>
          }

          <button className='cursor-pointer relative'>
            <User />
            <div
              className='absolute top-8 -left-5  border border-zinc-200 bg-white rounded-sm p-3 '
            >
              <div className='flex flex-col items-start gap-3 w-23'>
                <Link to={""}>Sign-In</Link>
                <Link to={""}>Sign-Up</Link>
              </div>
              <div className='flex flex-col items-start gap-3 w-26'>
                <Link to={""}>My Account</Link>
                <Link to={""}>Order History</Link>
                <button to={""}>Log Out</button>
              </div>
            </div>

          </button>

          <button className='cursor-pointer'>
            <ShoppingBag />

          </button>
        </div>
      </div>
    </div>
  )
}

export default Header