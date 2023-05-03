import React, { useState } from 'react'
import { useGetButtons } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '..';
import { RootState, setHourState } from '../../redux'
import { Error } from '..'
import { useNavigate } from 'react-router-dom';


export const HoursAvailable = () => {
    const [showComponent, setShowComponent] = useState(false)
    const { day, month, year, hour } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const validateDates = () => day && month && year
    const [buttons] = useGetButtons({
        day: day,
        month: month,
        year: year,
    })

    const onChangeHour = (event: number) => {
        const hour = buttons[event]
        dispatch(setHourState(hour))
    }

    const takeDate = () => {
        if (validateDates() && hour)
            navigate('/form')
        else if (!hour) {
            setShowComponent(true)
        }
    }

    return (
<div className="flex justify-center items-center p-12">
    <div className="flex-col  p-8  h-72 justify-around space-y-6">
        <h1 className='text-teal-700 font-sans text-lg text-center '><b>Por favor selecciona una hora</b></h1>
        <div className='flex items-center justify-center space-x-6'>
        {buttons.map((days: JSX.Element, index: number) => (
            <Button onClick={() => onChangeHour(index)} sx={{ backgroundColor: '#8AA6A3', color: 'white', borderColor: '#8AA6A3' }} variant='outlined' key={index} className='animatecss animatecss-fadeInRight'>{days}</Button>
        ))}
        </div>
        {validateDates() && hour ? (
            <div>
                <Error variant="outlined" severity="info" className='mx-20'>Seleccionaste el dia {day} del mes {month} del {year} a las {hour} horas</Error>
            </div>
        ) : <div>
            {showComponent && <Error variant="outlined" severity="error" className='mx-20'>Estas muy cerca de crerar tu cita, debes seleccionar una hora para continuar</Error>}
        </div>}
        <Button onClick={takeDate} sx={{ backgroundColor: '#10403b', color: 'white', borderColor: '#8AA6A3' }} variant='outlined' className='animatecss animatecss-fadeInRight'>AGENDA TU CITA</Button>
    </div>
</div>    )
}




