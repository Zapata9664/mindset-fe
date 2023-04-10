import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../redux'

export const Dashboard = () => {
    const date = useSelector((state: RootState) => state.auth.date)
    const navigate = useNavigate()
    const res = localStorage.getItem('token')
    useEffect(() => {
        if (res == null) {
            console.log(res)
            navigate('/login')
        }
    }, [res])

    return (
        <div>
            DASHBOARD
        </div>
    )
}
