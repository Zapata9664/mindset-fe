import React, { useState } from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import { useGetAppointments } from '../../hooks';

const localizer = dayjsLocalizer(dayjs)

export const CalendarMeetings = () => {
  const messages = {
    next: 'Mes siguiente',
    today: 'Fecha actual',
    month: 'Mes',
    week: 'Semana',
    day: 'Dia',
    previous: 'Mes anterior'

  }

  const { getAppointments } = useGetAppointments()
  const [events, setEvents]: any = useState([]);

  const onChange = async (newDate: any) => {
    const date = dayjs(newDate);
    const month = date.get('month')
    const year = date.get('year')
    const { data } = await getAppointments({ month: month, year: year });

    data.forEach((e: any) => {


      const appointment = dayjs(`${e.year}-${e.month + 1}-${e.day}T${e.hour}:00`);
      const event = {
        start: appointment.toDate(),
        end: appointment
          .add(1, "hour")
          .toDate(),
        title: "Nuevo titulo"
      }
      setEvents([event]);
    })
  }


  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, padding: 40 }}
        onNavigate={onChange}
        culture='es'
        messages={messages}
        

      />
    </div>
  )
}


