import { data } from 'autoprefixer'
import React from 'react'

const Location = () => {

  const loc = [
    {
      name: 'The Luxury Villa',
      placename: 'Plaża w Łebie',
      address: 'Leśna 1, 84-360 Łeba',
      country: 'Poland',
      location:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1178683.1321739568!2d17.4994695!3d54.7603561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe7969e991e859%3A0x72a8c67375d8865d!2zUGxhxbxhIHcgxYFlYmll!5e0!3m2!1sen!2s!4v1691842819643!5m2!1sen!2s'
    },
    {
      name: 'Luxury Villa',
      placename: 'Peanut Island Park',
      address: '6500 Peanut Island Rd, Riviera Beach, FL 33404',
      country: 'United States',
      location:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1178683.1321739568!2d17.4994695!3d54.7603561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d4563039501b%3A0xc5177da5504fffbc!2sPeanut%20Island%20Park!5e0!3m2!1sen!2s!4v1691843782830!5m2!1sen!2s'
    },
    {
      name: 'Luxury Villa',
      placename: 'Sandbanks Dunes Beach',
      address: 'West Lake, ON',
      country: 'Canada',
      location:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1178683.1321739568!2d17.4994695!3d54.7603561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d64c07994b3701%3A0xefa3ac2eabe65f1e!2sSandbanks%20Dunes%20Beach!5e0!3m2!1sen!2s!4v1691844285125!5m2!1sen!2s'
    }
  ]
  return (
    <div className=''>
      <h1 className='text-center text-yellow text-5xl text-ellipsis leading-slineheight1 font-serif tracking-widest sm:text-8xl'>Locations</h1>
      <div className='p-2'>
      {loc.map((data) => (
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-36 gap-y-16 px-8 py-20 sm:px-6 sm:py-21 lg:max-w-6xl lg:grid-cols-2 lg:px-8" key={data.location}>
          <div className="bg-white rounded-md grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 text-yellow font-serif text-base tracking-widest">
            <div className='flex items-center justify-center flex-col'>
              <p className='font-semibold leading-slineheight1 text-4xl text-center'>{data.name}</p>
              <p className='font-semibold text-2xl leading-slineheight2 text-center'>{data.placename}</p>
              <p className='font-semibold text-2xl leading-slineheight2 text-center'>{data.address},&nbsp;<span className='italic text-yellow'>{data.country}</span></p>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <iframe
              src={data.location}
              width="480"
              height="250"
              style={{ border: 0, borderRadius: '0.375rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Location