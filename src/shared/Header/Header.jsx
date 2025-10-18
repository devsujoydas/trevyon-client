import { ChevronDown, ChevronUp, Search, ShoppingBag, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavSearch from './NavSearch'
import { motion, AnimatePresence } from 'framer-motion'
import NavSearchFullScreen from './NavSearchFullScreen'
import CartSideBar from './CartSideBar'

const Header = () => {
  const [showSkinCareDropDown, setShowSkinCareDropDown] = useState(false)
  const [showCollectionsDropDown, setShowCollectionsDropDown] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showCartSide, setShowCartSide] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [user] = useState(true)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [openAccordion, setOpenAccordion] = useState(null)


  // Dropdown animation for desktop
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.15 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  }

  // Mobile accordion animation
  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 },
  }

  const navLinkClass = `
    relative group px-2 cursor-pointer
    before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0
    before:bg-black before:transition-all before:duration-300
    group-hover:before:w-full
  `

  const handleAccordionToggle = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  return (
    <header className='border-b border-zinc-200 bg-white sticky top-0 z-50'>
      <div className='w-main mx-auto flex items-center justify-between py-4 md:py-6 '>

        {/* Left side: Logo + Nav */}
        <div className='flex items-center gap-10'>
          <Link to="/" className='font-family-third text-lg sm:text-2xl font-semibold'>
            TREVYON
          </Link>

          {/* Desktop Nav */}
          <nav className='hidden md:flex items-center gap-6'>
            {/* Skincare Dropdown */}
            <div
              onMouseEnter={() => setShowSkinCareDropDown(true)}
              onMouseLeave={() => setShowSkinCareDropDown(false)}
              className='relative flex items-center select-none'
            >
              <span className={navLinkClass}>Skincare</span>
              {showSkinCareDropDown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}

              <AnimatePresence>
                {showSkinCareDropDown && (
                  <motion.div
                    key="skincare-dropdown"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className='absolute top-7 left-0 w-72 border border-zinc-200 flex justify-between bg-white rounded-sm p-5 shadow-lg z-20'
                  >
                    <div className='flex flex-col gap-3 text-sm'>
                      <Link to={`/products?category=cleansers`} className='hover:text-black hover:underline active:underline'>Cleansers</Link>
                      <Link to={`/products?category=essences`} className='hover:text-black hover:underline active:underline'>Essences</Link>
                      <Link to={`/products?category=moisturizers`} className='hover:text-black hover:underline active:underline'>Moisturizers</Link>
                    </div>
                    <div className='flex flex-col gap-3 text-sm'>
                      <Link to={`/products?category=toners`} className='hover:text-black hover:underline active:underline'>Toners</Link>
                      <Link to={`/products?category=serums`} className='hover:text-black hover:underline active:underline'>Serums</Link>
                      <Link to={`/products?category=masks`} className='hover:text-black hover:underline active:underline'>Masks</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Collections Dropdown */}
            <div
              onMouseEnter={() => setShowCollectionsDropDown(true)}
              onMouseLeave={() => setShowCollectionsDropDown(false)}
              className='relative flex items-center select-none'
            >
              <span className={navLinkClass}>Collections</span>
              {showCollectionsDropDown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}

              <AnimatePresence>
                {showCollectionsDropDown && (
                  <motion.div
                    key="collections-dropdown"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className='absolute top-7 left-0 w-72 border border-zinc-200 flex justify-between bg-white rounded-sm p-5 shadow-lg z-20'
                  >
                    <div className='flex flex-col gap-3 text-sm'>
                      <Link to={`/products?collections=hydration`} className='hover:text-black hover:underline active:underline'>Hydration</Link>
                      <Link to={`/products?collections=anti-aging`} className='hover:text-black hover:underline active:underline'>Anti-Aging</Link>
                    </div>
                    <div className='flex flex-col gap-3 text-sm'>
                      <Link to={`/products?collections=brightening`} className='hover:text-black hover:underline active:underline'>Brightening</Link>
                      <Link to={`/products?collections=sensitive-skin`} className='hover:text-black hover:underline active:underline'>Sensitive Skin</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>
        </div>

        {/* Right side icons */}
        <div className='flex items-center gap-5 '>
          {/* Search */}
          {showSearch ? (
            <div>
              <div className='md:block hidden'>
                <NavSearch setShowSearch={setShowSearch} />
              </div>
              <div className='block md:hidden'>
                <NavSearchFullScreen setShowSearch={setShowSearch} />
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              className='hover:text-black transition-colors duration-200 py-2 cursor-pointer'
            >
              <Search className='w-5 md:w-8' />
            </button>
          )}

          {/* User Dropdown */}
          <div
            className='relative cursor-pointer'
            onClick={() => setShowUser(!showUser)}
            onMouseEnter={() => setShowUser(true)}
            onMouseLeave={() => setShowUser(false)}
          >
            <User className='w-5 md:w-8' />
            <AnimatePresence>
              {showUser && (
                <motion.div
                  key="user-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className='absolute top-8 text-sm font-semibold overflow-hidden border-t border-zinc-200
                  bg-white rounded-sm shadow-lg z-20 '
                >
                  {user ? (
                    <div className='flex flex-col w-30'>
                      <Link to={"/profile"} className='hover:bg-zinc-200 px-3 py-2 border-b border-zinc-200'>My Account</Link>
                      <Link to={"/profile/order-history"} className='hover:bg-zinc-200 px-3 py-2 border-b border-zinc-200'>Order History</Link>
                      <button className='hover:bg-red-600 hover:text-white px-3 py-2 cursor-pointer text-red-600 text-left'>
                        Log Out
                      </button>
                    </div>
                  ) : (
                    <div className='flex flex-col w-20'>
                      <Link to={"/auth/signin"} className='hover:bg-zinc-200 px-3 py-2 border-b border-zinc-200'>Sign-In</Link>
                      <Link to={"/auth/signup"} className='hover:bg-zinc-200 px-3 py-2'>Sign-Up</Link>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart */}
          <button className='hover:text-black transition-colors duration-200'>
            <ShoppingBag onClick={() => setShowCartSide(true)} className='w-5 md:w-8 cursor-pointer' />
            <CartSideBar showCartSide={showCartSide} setShowCartSide={setShowCartSide} />
          </button>

          {/* Mobile Menu Icon */}
          <button
            className='md:hidden hover:text-black transition-colors duration-200'
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen with Accordion */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-white z-50 flex flex-col p-6 pt-20 gap-4 text-lg font-medium overflow-y-auto"
          >
            {/* Close Button (top-right) */}
            <button
              onClick={() => setShowMobileMenu(false)}
              className="absolute top-5 right-5 text-zinc-600 hover:text-black transition-colors"
            >
              <X size={28} />
            </button>

            <Link
              onClick={() => setShowMobileMenu(false)}
              to="/"
              className="hover:text-black text-xl font-semibold"
            >
              Home
            </Link>

            {/* Skincare Accordion */}
            <div>
              <button
                onClick={() => handleAccordionToggle("skincare")}
                className="w-full flex justify-between items-center text-xl font-semibold"
              >
                Skincare
                {openAccordion === "skincare" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {openAccordion === "skincare" && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.25 }}
                    className="pl-5 flex flex-col gap-3 text-zinc-600 text-base mt-2"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <Link to={`/products?category=cleansers`}>Cleansers</Link>
                    <Link to={`/products?category=essences`}>Essences</Link>
                    <Link to={`/products?category=moisturizers`}>Moisturizers</Link>
                    <Link to={`/products?category=toners`}>Toners</Link>
                    <Link to={`/products?category=serums`}>Serums</Link>
                    <Link to={`/products?category=masks`}>Masks</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Collections Accordion */}
            <div>
              <button
                onClick={() => handleAccordionToggle("collections")}
                className="w-full flex justify-between items-center text-xl font-semibold"
              >
                Collections
                {openAccordion === "collections" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {openAccordion === "collections" && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.25 }}
                    className="pl-5 flex flex-col gap-3 text-zinc-600 text-base mt-2"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <Link to={`/products?collections=hydration`}>Hydration</Link>
                    <Link to={`/products?collections=anti-aging`}>Anti-Aging</Link>
                    <Link to={`/products?collections=brightening`}>Brightening</Link>
                    <Link to={`/products?collections=sensitive-skin`}>Sensitive Skin</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-black text-xl font-semibold"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-black text-xl font-semibold"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}

export default Header
