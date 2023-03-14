import React from 'react'
import { logoFacebook } from '../assets'



export const Footer = () => {
    return (
        <div className="flex items-center justify-between bg-teal-900 h-36 p-20">
            <div className="text-teal-50 justify-end">
            <h1 >Olivia Forman, Ph.D.</h1>
            <p>Lorem ipsum dolor sit amet elit consectetur adipiscing elit aenean.</p>
            </div>

            <div className="text-teal-50 justify-end">
            <h1 >Updates</h1>
            <p>Blogs</p>
            <p>Wellmont shop</p>
            <p>All services</p>
            </div>

            <div className="text-teal-50 justify-end">
            <h1 >Seminars</h1>
            <p>NY - 21.06.2022</p>
            <p>NY - 21.06.2022</p>
            <p>NY - 21.06.2022</p>
            </div>
          </div>
    )
}