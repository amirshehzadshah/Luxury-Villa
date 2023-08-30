import React, { useState } from 'react'
import DropdownLocation from './DropdownLocation'
import BookDates from './BookDates'
import Travellers from './Travellers'

const BookNowForm = () => {

    const [selected, setSelected] = useState('Select Location');
  return (
    <div className='mx-4 flex flex-row justify-between'>
        <DropdownLocation selected={selected} setSelected={setSelected}  />
        <BookDates />
        <Travellers />
    </div>
  )
}

export default BookNowForm