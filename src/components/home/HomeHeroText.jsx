import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1]  mt-56 lg:mt-4 pt-5 text-center'>
            <div className='lg:text-[8.1vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                L'étincelle
            </div>
            <div className='lg:text-[8.1vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                qui
                <div className='h-[7vw] w-[16vw] rounded-full lg:-mt-3 mt-0 overflow-hidden '>
                    <Video />
                </div>
                génère
            </div>
            <div className='lg:text-[8.1vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText