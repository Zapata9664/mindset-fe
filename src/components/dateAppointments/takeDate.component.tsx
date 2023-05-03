import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Calendar } from '..';
import { RootState, setDate } from '../../redux'
import { Contact, HoursAvailable } from '..'
import { useDispatch, useSelector } from 'react-redux';



export const TakeDate = () => {
    const dispatch = useDispatch()

    const { day, month, year, hour } = useSelector((state: RootState) => state.auth)

    const onChange = (newValue: Dayjs | null) => {
        const date = dayjs(newValue);
        dispatch(setDate({ day: date.day(), month: date.month(), year: date.year() }));
    }
    const validateDates = () => day && month && year


    return (
        <div className="grid grid-cols-2 gap-2 border-2 ">
            <div className='px-32 m-24 space-y-6 '>
                <h1 className='text-teal-700 font-sans text-lg '>Agenda tu cita</h1>
                <Calendar onChange={onChange} />
            </div>

            {validateDates() ? (
                <HoursAvailable></HoursAvailable>
            ) :
                <Contact></Contact>
            }

        </div>
    )
}