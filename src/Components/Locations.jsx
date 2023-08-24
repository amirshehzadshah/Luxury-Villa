import React from 'react'

export const Locations = (props) => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-36 gap-y-16 px-8 py-20 sm:px-6 sm:py-21 lg:max-w-6xl lg:grid-cols-2 lg:px-8" key={props.location}>
          <div className="bg-white rounded-md grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 text-yellow font-serif text-base tracking-widest">
            <div className='flex items-center justify-center flex-col'>
              <p className='font-semibold leading-slineheight1 text-4xl text-center'>{props.name}</p>
              <p className='font-semibold text-2xl leading-slineheight2 text-center'>{props.placename}</p>
              <p className='font-semibold text-2xl leading-slineheight2 text-center'>{props.address},&nbsp;<span className='italic text-yellow'>{props.country}</span></p>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <iframe
              src={props.location}
              width="480"
              height="250"
              style={{ border: 0, borderRadius: '0.375rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
  )
}
