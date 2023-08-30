import React, { useState } from 'react'

const DropdownLocation = ({ selected, setSelected }) => {

    const [isActive, setISActive] = useState(false)
    let droploc = [
        {
            id: 1,
            loc: "Poland"
        },
        {
            id: 2,
            loc: "United State"
        },
        {
            id: 3,
            loc: "Canada"
        }
    ]
    return (
        <div className='dropwon relative select-none mx-4 w-full cursor-pointer flex bg-white rounded-md py-1.5 text-black ring-1 ring-inset ring-white sm:text-sm sm:leading-6'>
            <div className='dropdown-btn px-4 w-full flex flex-row text-lg font-bold items-center tracking-widest' onClick={() => setISActive(!isActive)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div className='px-4 grow'>{selected}</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {
                isActive && (
                    <div className='dropdown-content px-4 py-2 absolute top-full text-lg font-bold tracking-widest'>
                        {
                            droploc.map((item, index) => (
                                <div className='dropdown-item cursor-pointer text-white flex flex-row' key={index} onClick={() => { setSelected(item.loc); setISActive(false); }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <div className='px-4'>{item.loc}</div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default DropdownLocation