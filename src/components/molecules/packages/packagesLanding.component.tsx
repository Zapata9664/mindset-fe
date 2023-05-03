import React from 'react'
import { useGetPackages } from '../../../hooks';
import { PackagesCard } from '../..';



export const PackagesLanding = () => {
    const [responsePackages] = useGetPackages()

    return (
        <div className='p-1 px-28'>
        <div className='p-7 '>
            <h1 className='text-teal-700 font-sans text-lg '><b>NUESTROS PAQUETES</b></h1>
        </div>
        <div className="flex justify-between flex-wrap my-8">
            {responsePackages ? (
                responsePackages.map(({ title, sessions, description, path }: { title: string, sessions: number, description: string, path: string }, index) => (
                    <PackagesCard key={index} title={title} sessions={sessions} description={description} path={path}></PackagesCard>
                ))
            ) : <div>
            </div>}
        </div>
    </div>
    )
}