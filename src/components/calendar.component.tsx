import React from 'react'
import { LocalizationProvider, deDE, DatePicker, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


export const Calendar = () => {
    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
    </LocalizationProvider>
    )
}