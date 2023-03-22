import React, { useState} from 'react'
import { LocalizationProvider, DateCalendar, DateCalendarProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const adapter = new AdapterDayjs({});

export const Calendar = (props: JSX.IntrinsicAttributes & DateCalendarProps<Date>) => {
    const firstAvailableSlotDay = adapter.date(new Date(2024, 10, 10))
    const [calendarValue, setCalendarValue] = useState<Date | null>(new Date());

    const onChange = (newValue:Date | null) => {
        setCalendarValue(newValue)
        console.log('hola' + newValue)
    }

    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={onChange} value={calendarValue}></DateCalendar>
    </LocalizationProvider>
    )
}