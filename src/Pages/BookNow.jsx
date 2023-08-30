import React from 'react'
import BookNowForm from '../Components/BookNowForm'

const BookNow = () => {
    return (
        <>
            <div className=''>
                <div className='mx-8 py-2 font-serif sm:mx-16 border-4'>
                    <div className='mx-2 py-8 text-5xl text-white font-extrabold tracking-widest border-2'>
                        <span>Where to go ?</span>
                    </div>
                    <div className=' mx-2 py-8 border-4'>
                        <BookNowForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookNow