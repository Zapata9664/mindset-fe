import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
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
