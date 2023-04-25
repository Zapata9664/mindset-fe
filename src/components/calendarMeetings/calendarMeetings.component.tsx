import React from 'react';

import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'

const localizer = dayjsLocalizer(dayjs)



export const CalendarMeetings = ({ }) => {

  const appointment = dayjs('2023-4-25');

  appointment.set('year', 2023)
  appointment.set('day', 26)
  appointment.set('month', 4) // April
  appointment.set('hours', 1)
  appointment.set('minute', 0)



  const events = [
    {
      start: appointment.toDate(),
      end: appointment
        .add(1, "hour")
        .toDate(),
      title: "Some title"
    }
  ]

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}


