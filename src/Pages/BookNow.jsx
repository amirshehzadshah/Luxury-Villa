import React from 'react'
import BookNowForm from '../Components/BookNowForm'

const BookNow = () => {
    return (
        <>
            <div className='pb-48'>
                <div className='mx-8 py-2 font-serif sm:mx-16'>
                    <div className='mx-2 py-8 text-5xl text-white font-extrabold tracking-widest'>
                        <span>Where to go ?</span>
                    </div>
                    <div className=' mx-2 py-8'>
                        <BookNowForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookNow