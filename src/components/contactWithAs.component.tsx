import React from 'react'
import EmailIcon from '@mui/icons-material/Email';


export const Contact = () => {
    return (
        <div className="flex justify-center items-center py-40">
        <div className=" flex border rounded-lg p-16 h-80 space-y-16 bg-white flex-col justify-around bg-[url('/src/assets/backgroundImageContactAs.png')] bg-cover">
            <h1 className='text-white font-sans text-2xl p-10 '>Contactate con nosotros</h1>
            <div className='flex'>
                <EmailIcon sx={{ color: '#A4B5A2' }} fontSize='large' className='m-2'></EmailIcon>
                <h1 className='text-xl font-sans text-gray-400 p-2'>mentalhealt@gmail.com</h1>
            </div>
        </div>
    </div>

    )
}