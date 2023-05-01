import React, { useEffect, useState } from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import { useGetAppointments } from '../../hooks';

const localizer = dayjsLocalizer(dayjs)

export const CalendarMeetings = ({ }) => {
  const [dateFilter, setDateFilter] = useState<{ month: number | null, year: number | null }>({
    month: null,
    year: null,
  })

  const res = useGetAppointments(dateFilter)

  useEffect(() => {
    console.log(res);
    res.forEach((objectDate) => {
      objectDate.map((e: any) => {
        const objectStart = {
          start: dayjs((e.day + e.month + e.year).toString()),
          end: appointment
            .add(1, "hour")
            .toDate(),
          title: "Some title"
        }
        console.log(objectStart);
        
        events.push(objectStart)
      })
    })
  }, res)

  const appointment = dayjs('2023-4-25');
  const onChange = (newMonth: any) => {
    const month = dayjs(newMonth).get('month')
    const year = dayjs(newMonth).get('year')
    setDateFilter({ ...dateFilter, month: month, year: year })
  }

  const events: any = []

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, padding: 40 }}
        onNavigate={onChange}

      />
    </div>
  )
}


