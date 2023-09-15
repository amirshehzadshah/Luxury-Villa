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
import img18 from '../assets/68389.jpg'
import img19 from '../assets/71800.jpg'
import img20 from '../assets/080719.jpg'
import img21 from '../assets/258154.jpg'
import img22 from '../assets/271631.jpg'
import img23 from '../assets/534151.jpg'
import img24 from '../assets/827528.jpg'
import img25 from '../assets/1090092.jpg'
import img26 from '../assets/1457841.jpg'
import img27 from '../assets/1457842.jpg'
import img28 from '../assets/1457845.jpg'
import img29 from '../assets/1543447.jpg'
import img30 from '../assets/1571450.jpg'
import img31 from '../assets/1571463.jpg'
import img32 from '../assets/1571470.jpg'
import img33 from '../assets/1743226.jpg'
import img34 from '../assets/1918291.jpg'
import img35 from '../assets/2227774.jpg'
import img36 from '../assets/2343465.jpg'
import img37 from '../assets/2343468.jpg'
import img38 from '../assets/2363807.jpg'
import img39 from '../assets/2725675.jpg'
import img40 from '../assets/2747070.jpg'
import img41 from '../assets/3144580.jpg'
import img42 from '../assets/3315291.jpg'
import img43 from '../assets/3316926.jpg'
import img44 from '../assets/3356416.jpg'
import img45 from '../assets/3718434.jpg'
import img46 from '../assets/3741317.jpg'
import img47 from '../assets/3754594.jpg'
import img48 from '../assets/3773582.jpg'
import img49 from '../assets/3797991.jpg'
import img50 from '../assets/3935350.jpg'
import img51 from '../assets/4112234.jpg'
import img52 from '../assets/4112235.jpg'
import img53 from '../assets/4352247.jpg'
import img54 from '../assets/4450337.jpg'
import img55 from '../assets/4497544.jpg'
import img56 from '../assets/4916509.jpg'
import img57 from '../assets/4916537.jpg'
import img58 from '../assets/4946903.jpg'
import img59 from '../assets/5705490.jpg'
import img60 from '../assets/5927436.jpg'
import img61 from '../assets/6076854.jpg'
import img62 from '../assets/6283961.jpg'
import img63 from '../assets/6292341.jpg'
import img64 from '../assets/6758773.jpg'
import img65 from '../assets/6782428.jpg'
import img66 from '../assets/6782567.jpg'
import img67 from '../assets/6957079.jpg'
import img68 from '../assets/6957083.jpg'
import img69 from '../assets/7061664.jpg'
import img70 from '../assets/7534561.jpg'
import img71 from '../assets/17556197.jpg'
import img72 from '../assets/17968360.jpg'
import img73 from '../assets/18201945.jpg'
import img74 from '../assets/11669961.jpg'
import img75 from '../assets/1488327.jpg'
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
        },
        {
            id: 18,
            imgSrc: img18
        },
        {
            id: 19,
            imgSrc: img19
        },
        {
            id: 20,
            imgSrc: img20
        },
        {
            id: 21,
            imgSrc: img21
        },
        {
            id: 22,
            imgSrc: img22
        },
        {
            id: 23,
            imgSrc: img23
        },
        {
            id: 24,
            imgSrc: img24
        },
        {
            id: 25,
            imgSrc: img25
        },
        {
            id: 26,
            imgSrc: img26
        },
        {
            id: 27,
            imgSrc: img27
        },
        {
            id: 28,
            imgSrc: img28
        },
        {
            id: 29,
            imgSrc: img29
        },
        {
            id: 30,
            imgSrc: img30
        },
        {
            id: 31,
            imgSrc: img31
        },
        {
            id: 32,
            imgSrc: img32
        },
        {
            id: 33,
            imgSrc: img33
        },
        {
            id: 34,
            imgSrc: img34
        },
        {
            id: 35,
            imgSrc: img35
        },
        {
            id: 36,
            imgSrc: img36
        },
        {
            id: 37,
            imgSrc: img37
        },
        {
            id: 38,
            imgSrc: img38
        },
        {
            id: 39,
            imgSrc: img39
        },
        {
            id: 40,
            imgSrc: img40
        },
        {
            id: 41,
            imgSrc: img41
        },
        {
            id: 42,
            imgSrc: img42
        },
        {
            id: 43,
            imgSrc: img43
        },
        {
            id: 44,
            imgSrc: img44
        },
        {
            id: 45,
            imgSrc: img45
        },
        {
            id: 46,
            imgSrc: img46
        },
        {
            id: 47,
            imgSrc: img47
        },
        {
            id: 48,
            imgSrc: img48
        },
        {
            id: 49,
            imgSrc: img49
        },
        {
            id: 50,
            imgSrc: img50
        },
        {
            id: 51,
            imgSrc: img51
        },
        {
            id: 52,
            imgSrc: img52
        },
        {
            id: 53,
            imgSrc: img53
        },
        {
            id: 54,
            imgSrc: img54
        },
        {
            id: 55,
            imgSrc: img55
        },
        {
            id: 56,
            imgSrc: img56
        },
        {
            id: 57,
            imgSrc: img57
        },
        {
            id: 58,
            imgSrc: img58
        },
        {
            id: 59,
            imgSrc: img59
        },
        {
            id: 60,
            imgSrc: img60
        },
        {
            id: 61,
            imgSrc: img61
        },
        {
            id: 62,
            imgSrc: img62
        },
        {
            id: 63,
            imgSrc: img63
        },
        {
            id: 64,
            imgSrc: img64
        },
        {
            id: 65,
            imgSrc: img65
        },
        {
            id: 66,
            imgSrc: img66
        },
        {
            id: 67,
            imgSrc: img67
        },
        {
            id: 68,
            imgSrc: img68
        },
        {
            id: 69,
            imgSrc: img69
        },
        {
            id: 70,
            imgSrc: img70
        },,
        {
            id: 71,
            imgSrc: img71
        },
        {
            id: 72,
            imgSrc: img72
        },
        {
            id: 73,
            imgSrc: img73
        },
        {
            id: 74,
            imgSrc: img74
        },
        {
            id: 75,
            imgSrc: img75
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
