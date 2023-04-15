import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const useCreateappointments = (appointment: { name: string | null | undefined, email: string | null | undefined, date: string | null, hour: number | null, reason: string | null }) => {
    const [error, setError] = useState('');
    const [status, setStatus] = useState(6);

    const navigate = useNavigate()
    useEffect(() => {
        
        console.log(appointment);
        if (appointment.name === undefined) {
            return;
        }
        const postCreateAppontment = async () => {
            try {
                const res = await axios.post('http://localhost:3200/appointment', JSON.stringify(appointment), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    }
                })
                setStatus(res.status)
                if (res.status === 201) {
                    navigate('/successful')
                }
            } catch (error: any) {
                setStatus(error.response.data.statusCode)
                setError('Please fill in the required fields')
            }
        }
        postCreateAppontment();
    })
    return status;
}