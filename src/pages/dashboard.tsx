import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux'
import { CalendarMeetings } from '../components'

export const Dashboard = () => {
    const navigate = useNavigate()
    const token = useSelector((state: RootState) => state.auth.token)

    useEffect(() => {
        if (token == null) {
            navigate('/login')
        }
    }, [token])

    return (
        <div>
            <CalendarMeetings></CalendarMeetings>
        </div>
    )
}
