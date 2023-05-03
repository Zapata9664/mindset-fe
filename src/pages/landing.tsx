import React from 'react'
import { Introduction, PackagesLanding, TakeDate } from '../components';

export const Landing = () => {

    return (
        <div className="space-y-6">
                <Introduction ></Introduction>
                <TakeDate></TakeDate>
                <PackagesLanding></PackagesLanding>
        </div>
    )
};