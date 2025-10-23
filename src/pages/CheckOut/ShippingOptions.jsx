import React, { useState } from 'react'

const ShippingOptions = () => {
  const [selected, setSelected] = useState('standard')

  const options = [
    { id: 'standard', label: 'Standard Shipping (5-7 business days)', price: '$5.99' },
    { id: 'express', label: 'Express Shipping (2-3 business days)', price: '$12.99' },
    { id: 'overnight', label: 'Overnight Shipping (1 business day)', price: '$24.99' },
  ]

  return (
    <div className='space-y-5'>
      {options.map((option) => (
        <div
          key={option.id}
          onClick={() => setSelected(option.id)}
          className={`flex justify-between items-center border p-4 rounded-xl cursor-pointer transition-all 
            ${selected === option.id ? 'border-black bg-gray-50' : 'border-zinc-200'}`}
        >
          <label htmlFor={option.id} className='flex items-center gap-2 cursor-pointer'>
            <input
              type='radio'
              id={option.id}
              name='shipping'
              checked={selected === option.id}
              onChange={() => setSelected(option.id)}
              className='w-5 h-5 accent-black cursor-pointer'
            />
            <h1>{option.label}</h1>
          </label>
          <p className='font-semibold text-xl'>{option.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ShippingOptions
