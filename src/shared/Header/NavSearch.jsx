import React, { useState, useEffect, useRef } from 'react'
import demo from '../../assets/products/product_1.png'
import demo2 from '../../assets/products/product_2.png'
import demo3 from '../../assets/products/product_3.png'
import demo4 from '../../assets/products/product_4.png'
import demo5 from '../../assets/products/product_5.png'
import demo6 from '../../assets/products/product_6.png'
import { Search, ShoppingBag } from 'lucide-react'

const SearchProduct = ({ product }) => (
  <div className='flex items-center justify-between gap-2 p-2 cursor-pointer hover:shadow-sm border border-zinc-100 transition-all duration-100'>
    <div className='flex items-center gap-2'>
      <div className='w-16 rounded-md overflow-hidden'>
        <img src={product.image || demo} alt={product.name} />
      </div>
      <div>
        <h1 className='font-semibold text-sm'>{product.name}</h1>
        <p className='font-semibold text-xl text-red-800'>{product.price}$</p>
      </div>
    </div>
    <div>
      <button className='flex items-center gap-2 justify-center border border-zinc-200 px-4 py-1.5 rounded-sm text-sm cursor-pointer hover:shadow-md active:scale-95 transition-all duration-100 hover:bg-zinc-200'>
        <ShoppingBag className='w-5' /> Add To Cart
      </button>
    </div>
  </div>
)

const NavSearch = ({ setShowSearch }) => {
  const [searchText, setSearchText] = useState('')
  const [searchProducts, setSearchProducts] = useState([])
  const [openResultBox, setOpenResultBox] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const containerRef = useRef(null)

  const products = [
    { id: 1, name: "Body Lotion", price: 49, image: demo },
    { id: 2, name: "Face Cream", price: 39, image: demo2 },
    { id: 3, name: "Hand Wash", price: 19, image: demo3 },
    { id: 4, name: "Hair Oil", price: 29, image: demo4 },
    { id: 5, name: "Body Scrub", price: 35, image: demo5 },
    { id: 6, name: "Moisturizer", price: 25, image: demo6 },
    { id: 1, name: "Body Lotion", price: 49, image: demo },
    { id: 2, name: "Face Cream", price: 39, image: demo2 },
    { id: 3, name: "Hand Wash", price: 19, image: demo3 },
    { id: 4, name: "Hair Oil", price: 29, image: demo4 },
    { id: 5, name: "Body Scrub", price: 35, image: demo5 },
    { id: 6, name: "Moisturizer", price: 25, image: demo6 },
  ]

  useEffect(() => {
    if (searchText.trim() === '') {
      setSearchProducts([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)

    const timeoutId = setTimeout(() => {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      )
      setSearchProducts(filtered)
      setIsSearching(false)
    }, 200)

    return () => clearTimeout(timeoutId)
  }, [searchText])

  // Handle click outside to close the result box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenResultBox(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative w-full max-w-md' ref={containerRef}>
      <div
        className='cursor-pointer border border-zinc-400 rounded-full flex items-center gap-2 py-2 px-3 w-full'
        onClick={() => setOpenResultBox(true)}
      >
        <Search onClick={() => setShowSearch(false)} className="cursor-pointer" />
        <input
          type="text"
          placeholder='Search'
          className='outline-none h-full bg-transparent w-96'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onFocus={() => setOpenResultBox(true)}
        />
      </div>

      <div
        className={`absolute ${openResultBox ? "block" : "hidden"} top-12 w-full bg-white border border-zinc-200 rounded-md z-10`}
        style={{ maxHeight: '18rem', overflowY: 'auto' }}  // <-- এখানে স্টাইল দিলাম
      >
        <div className='grid gap-2 p-2'>
          {searchText.trim() === '' ? (
            <div className='flex items-center justify-center min-h-[14rem] rounded-md text-zinc-400'>
              <h1>Search Products</h1>
            </div>
          ) : isSearching ? (
            <div className='flex items-center justify-center min-h-[14rem] rounded-md text-zinc-400'>
              <h1>Searching...</h1>
            </div>
          ) : searchProducts.length > 0 ? (
            searchProducts.map(product => (
              <SearchProduct key={product.id} product={product} />
            ))
          ) : (
            <div className='flex items-center justify-center min-h-[14rem] rounded-md text-zinc-400'>
              <h1>Product not found...</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavSearch
