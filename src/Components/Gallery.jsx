import React, { useState } from 'react'
import img1 from '../assets/pexels-adriaan-greyling-764830.jpg'
import img2 from '../assets/pexels-deeana-arts-2565222.jpg'
import img3 from '../assets/pexels-jess-loiterton-8651513.jpg'
import img4 from '../assets/pexels-keegan-checks-9860908.jpg'
import img5 from '../assets/pexels-maria-orlova-4946764.jpg'
import img6 from '../assets/pexels-max-rahubovskiy-6283973.jpg'
import img7 from '../assets/pexels-maria-orlova-4906407.jpg'
import img8 from '../assets/pexels-max-rahubovskiy-6587833.jpg'
import img9 from '../assets/pexels-max-rahubovskiy-6587826.jpg'
import img10 from '../assets/pexels-pixabay-221457.jpg'
import img11 from '../assets/pexels-pixabay-261101.jpg'
import img12 from '../assets/pexels-max-rahubovskiy-6587830.jpg'
import img13 from '../assets/pexels-pixabay-261204.jpg'
import img14 from '../assets/pexels-quang-nguyen-vinh-2476632.jpg'
import img15 from '../assets/pexels-ryutaro-tsukata-5746250.jpg'
import img16 from '../assets/pexels-souranshi-fashion-and-lifestyle-magazine-4497546.jpg'
import img17 from '../assets/pexels-thorsten-technoman-338504.jpg'
import CloseIcon from '@mui/icons-material/Close';

export const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: img1
        },
        {
            id: 2,
            imgSrc: img2
        },
        {
            id: 3,
            imgSrc: img3
        },
        {
            id: 4,
            imgSrc: img4
        },
        {
            id: 5,
            imgSrc: img5
        },
        {
            id: 6,
            imgSrc: img6
        },
        {
            id: 7,
            imgSrc: img7
        },
        {
            id: 8,
            imgSrc: img8
        },
        {
            id: 9,
            imgSrc: img9
        },
        {
            id: 10,
            imgSrc: img10
        },
        {
            id: 11,
            imgSrc: img11
        },
        {
            id: 12,
            imgSrc: img12
        },
        {
            id: 13,
            imgSrc: img13
        },
        {
            id: 14,
            imgSrc: img14
        },
        {
            id: 15,
            imgSrc: img15
        },
        {
            id: 16,
            imgSrc: img16
        },
        {
            id: 17,
            imgSrc: img17
        }
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    console.log('1 setModel:' + model);
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(!model);
    }
    console.log('2 setModel:' + model);
    return (
        <>
            {
                model ?
                    <div className={model ? 'model open' : 'model'}>
                        <img src={tempimgSrc} />
                        <CloseIcon className='close-icon' onClick={() => setModel(!model)} />
                    </div>
                    : null
            }
            <div className='gallery-container'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
