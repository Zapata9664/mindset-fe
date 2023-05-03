import React from "react";
import { imagenLadingTransition, imagenLadingTransition2 } from '../../assets';



export const Introduction = (props: any) => {
    return (
        <div className='grid grid-cols-2 gap-2 bg-[#A4B5A2] m-10 animatecss animatecss-fadeInLeft'>
                <div >
                    <img src={imagenLadingTransition} />
                </div>
                <div className='p-14 py-48'>
                    <img src={imagenLadingTransition2} />
                </div>
            </div>
    )
}