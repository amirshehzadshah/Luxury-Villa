import React from 'react'
import Input from './Input'

const Footer = () => {
  return (
      <div className="mx-auto font-serif grid max-w-2xl grid-cols-1 items-end gap-x-64 gap-y-8 sm:px-6 sm:py-2 lg:max-w-full lg:grid-cols-2 lg:px-2">
        <div className='mx-12 px-8'>
          <p className="mt-4 text-4xl text-white">Subscribe to Our</p>
          <h2 className="text-4xl font-bold tracking-wider text-white sm:text-4xl">Newsletter</h2>
          <Input />
        </div>
        <div className="mx-auto font-serif text-center grid max-w-2xl grid-cols-1 items-end gap-x-4 gap-y-0 sm:px-6 sm:py-2 lg:max-w-full lg:grid-cols-2 lg:px-0">
          <p className='text-white'>Copyright © LUXURYVILLAS.COM</p>
          <p className='text-white'>Privacy Policy &nbsp; &nbsp;| &nbsp; &nbsp;Terms & Conditions</p>
        </div>
      </div>
  )
}

export default Footer