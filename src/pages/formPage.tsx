import React, { useEffect, useState } from 'react'
import { Input, Button } from '../components'
import { RootState } from '../redux';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error } from '../components';
import { useNavigate } from 'react-router-dom';

export const Form = () => {

    const navigate = useNavigate()
    const [dataDate, setDataDate] = useState<{ date: string | null, hour: null | undefined }>({
        date: null,
        hour: null,
    })
    const [error, setError] = useState('');
    const [status, setStatus] = useState();


    const date = useSelector((state: RootState) => state.auth.date)
    const hour = useSelector((state: RootState) => state.auth.hour)

    useEffect(() => {
        const dataDateSet = () => {
            if (date && hour) {
                setDataDate({ ...dataDate, date: date, hour: hour })
            }
        }
        dataDateSet()
    }, []
    )

    const [form, setForm] = useState({
        name: null,
        email: null,
        reason: '',

    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handlerSubmit = async () => {
        const appointment = {
            ...dataDate,
            ...form
        }
        try {
            const res = await axios.post('http://localhost:3200/appointment', JSON.stringify(appointment), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
            if (res.status === 201) {
                navigate('/successful')
            }
        } catch (error: any) {
            setStatus(error.response.data.statusCode)
            if (status === 400) {

            }
            setError('Please fill in the required fields')
        }
    }

    return (

        <div className="flex justify-center items-center p-20 bg-teal-50 bg-[url('/src/assets/backgroundImage.png')] bg-cover"  >
            <div className="border flex border-gray-400 rounded-lg p-14 bg-white flex-col h-auto justify-around space-y-4">
                <h1 className='text-teal-700 font-sans'><b>APPOINTMENT CREATION FORM</b></h1>
                <Input required id="outlined-basic" label="Name" variant="outlined" name="name" onChange={onChange} />
                <Input required id="outlined-basic" label="Email" variant="outlined" name="email" onChange={onChange} />
                <Input id="outlined-multiline-static" label="Please tell us your reason" multiline rows={4} name='reason' onChange={onChange} />
                {status === 400 ? (
                    <Error severity="error">{error}</Error>
                ) : <Error variant="outlined" severity="info">Fields marked with (*) are required</Error>}
                <Button sx={{ backgroundColor: '#10403B', color: 'white', borderColor: '#10403B' }} variant='outlined' onClick={handlerSubmit} >Make a date</Button>
            </div>
        </div>
    )
}
