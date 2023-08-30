import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker';

const BookDates = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }

  return (
    <Datepicker
      value={value}
      onChange={handleValueChange}
      placeholder={"Select Dates"}
      primaryColor={"amber"}
      separator={" to "}
      displayFormat={"DD/MM/YYYY"}
      inputClassName="w-full h-14 rounded-md px-4 text-lg font-bold items-center tracking-widest"
    />
  )
}

export default BookDates