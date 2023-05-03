import React from 'react'
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar, DateCalendarProps } from '@mui/x-date-pickers/DateCalendar';
import es from 'dayjs/locale/es'

export const Calendar = (props: DateCalendarProps<Dayjs | null>) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={es}>
            <div className='rounded-xl border-2 border-gray-400  w-96'>
                <DateCalendar {...props} />
            </div>
        </LocalizationProvider>
    )
}
