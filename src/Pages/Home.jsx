import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-0 py-6 sm:px-6 sm:py-22 lg:max-w-full lg:grid-cols-2 lg:px-8">
        <div></div>
        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 text-white font-serif text-base tracking-widest sm:py-8">
          <div className='flex items-center justify-center flex-col'>
            <p className='font-semibold leading-slineheight1 text-4xl text-center'>Looking For Your Next</p>
            <span className='text-yellow text-8xl leading-slineheight1'>Escape?</span>
            <p className='font-semibold text-2xl leading-slineheight2 text-center'>Luxury vacation home rentals curated</p>
            <p className='font-semibold text-2xl leading-slineheight2 text-center'>by <span className='italic text-yellow'>Luxury Villa</span></p>
            <div className='py-8'>
              <button className='booknow-button'>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

