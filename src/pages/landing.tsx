import React from 'react'
import { Introduction, PackagesLanding, TakeDate } from '../components';

export const Landing = () => {

    return (
        <div className="flex-col ">
            <div className='py-8'>
                <Introduction ></Introduction>
            </div>
            <div className="py-8">
                <TakeDate></TakeDate>
            </div>
            <div className='py-8'>
                <PackagesLanding></PackagesLanding>
            </div>
        </div>
    )
};