import { ChevronDown, ChevronUp, Search, ShoppingBag, User } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavSearch from './NavSearch'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [showSkinCareDropDown, setShowSkinCareDropDown] = useState(false)
  const [showCollectionsDropDown, setShowCollectionsDropDown] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [user, setUser] = useState(false)

  // Animation variants for dropdowns
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }

  // NavLink hover underline animation CSS via Tailwind + group
  const navLinkClass =
    `relative group px-1 md:px-2 cursor-pointer
     before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0
     before:bg-black before:transition-all before:duration-300
     group-hover:before:w-full`

  return (
    <div className='border-b border-zinc-200'>
      <div className='flex flex-wrap sm:flex-nowrap items-center justify-between w-main py-6 '>

        {/* Logo and Nav Links */}
        <div className=' flex items-center gap-8 sm:gap-14 flex-wrap'>
          <div>
            <Link to={"/"} className='font-family-third text-xl sm:text-2xl font-semibold'>
              TREVYON
            </Link>
          </div>

          <div className='flex items-center gap-6 sm:gap-10 flex-wrap'>
            {/* Skincare NavLink */}
            <div 
              onMouseEnter={() => setShowSkinCareDropDown(true)}
              onMouseLeave={() => setShowSkinCareDropDown(false)}
              className='relative flex items-center gap- cursor-pointer select-none'
            >
              <span className={`${navLinkClass} hover:underline`}>
                Skincare
              </span>
              {showSkinCareDropDown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}

              <AnimatePresence>
                {showSkinCareDropDown && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setShowSkinCareDropDown(true)}
                    onMouseLeave={() => setShowSkinCareDropDown(false)}
                    className='absolute top-7 left-0 w-72 border border-zinc-200 flex justify-between bg-white rounded-sm p-5 shadow-lg z-20'
                  >
                    <div className='flex flex-col gap-3 text-sm'>
                      <Link to={""} className='hover:text-black hover:underline'>Cleansers</Link>
                      <Link to={""} className='hover:text-black hover:underline'>Essences</Link>
                      <Link to={""} className='hover:text-black hover:underline'>Moisturizers</Link>
                    </div>
                    <div className='flex flex-col gap-3 text-sm'>
                      <Link to={""} className='hover:text-black hover:underline'>Toners</Link>
                      <Link to={""} className='hover:text-black hover:underline'>Serums</Link>
                      <Link to={""} className='hover:text-black hover:underline'>Masks</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Collections NavLink */}
            <div
              onMouseEnter={() => setShowCollectionsDropDown(true)}
              onMouseLeave={() => setShowCollectionsDropDown(false)}
              className='relative flex items-center cursor-pointer select-none'
            >
              <span className={navLinkClass}>
                Collections
              </span>
              {showCollectionsDropDown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}

              <AnimatePresence>
                {showCollectionsDropDown && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setShowCollectionsDropDown(true)}
                    onMouseLeave={() => setShowCollectionsDropDown(false)}
                    className='absolute top-7 left-0 w-72 border border-zinc-200 flex justify-between bg-white rounded-sm p-5 shadow-lg z-20'
                  >
                    <div className='flex flex-col gap-3 text-sm'>
                      <Link to={""} className='hover:text-black hover:underline'>Hydration</Link>
                      <Link to={""} className='hover:text-black hover:underline'>Anti-Aging</Link>
                    </div>
                    <div className='flex flex-col gap-3 text-sm'>
                      <Link to={""} className='hover:text-black hover:underline'>Brightening</Link>
                      <Link to={""} className='hover:text-black hover:underline'>Sensitive Skin</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Simple NavLinks */}
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? 'font-semibold' : 'font-normal'}`
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? 'font-semibold' : 'font-normal'}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Right side icons */}
        <div className=' flex items-center gap-6 sm:gap-8 mt-4 sm:mt-0 '>
          {/* Search */}
          {showSearch ? (
            <NavSearch setShowSearch={setShowSearch} />
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              className='cursor-pointer hover:text-black transition-colors duration-200'
              aria-label="Open search"
            >
              <Search size={24} />
            </button>
          )}

          {/* User Icon & Dropdown */}
          <div
            className='relative cursor-pointer'
            onMouseEnter={() => setShowUser(true)}
            onMouseLeave={() => setShowUser(false)}
          >
            <button aria-label="User menu" className='hover:text-black transition-colors duration-200'>
              <User size={24} />
            </button>

            <AnimatePresence>
              {showUser && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className='absolute top-8 left-0 text-sm font-semibold border border-zinc-200 bg-white rounded-sm shadow-lg z-20 w-36'
                >
                  {user ? (
                    <div className='flex flex-col items-start'>
                      <Link className='hover:bg-zinc-200 px-3 py-2 w-full border-b border-zinc-200'>My Account</Link>
                      <Link className='hover:bg-zinc-200 px-3 py-2 w-full border-b border-zinc-200'>Order History</Link>
                      <button className='hover:bg-red-600 hover:text-white px-3 py-2 text-red-600 w-full cursor-pointer text-left'>Log Out</button>
                    </div>
                  ) : (
                    <div className='flex flex-col items-start'>
                      <Link to={""} className='hover:bg-zinc-200 px-3 py-2 w-full border-b border-zinc-200' > Sign-In </Link>
                      <Link to={""} className='hover:bg-zinc-200 px-3 py-2 w-full'
                      > Sign-Up </Link>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Shopping Bag */}
          <button
            className='cursor-pointer hover:text-black transition-colors duration-200'
            aria-label="Shopping bag"
          >
            <ShoppingBag size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
