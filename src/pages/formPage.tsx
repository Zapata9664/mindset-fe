import React, { useEffect, useState } from 'react'
import { Input, Button } from '../components'
import { RootState } from '../redux';
import { useSelector } from 'react-redux';
import { Error } from '../components';
import { useCreateappointments } from '../hooks';

export const Form = () => {
    const day = useSelector((state: RootState) => state.auth.day)
    const month = useSelector((state: RootState) => state.auth.month)
    const year = useSelector((state: RootState) => state.auth.year)
    const hour = useSelector((state: RootState) => state.auth.hour)
    const [appointment, setappointment] = useState<{ name: string | null | undefined, email: string | null | undefined, reason: string | null, day: number | null | undefined, month: number | null | undefined, year: number | null | undefined, hour: number | null, }>({ name: undefined, email: undefined, day: undefined, month: undefined, year: undefined, hour: null, reason: null })
    const res = useCreateappointments(appointment)
    const [dataDate, setDataDate] = useState<{ day: number | null, month: number | null, year: number | null, hour: number | null }>({
        day: null,
        month: null,
        year: null,
        hour: null,
    })

    useEffect(() => {
        const dataDateSet = () => {
            if (day && month && year && hour) {
                setDataDate({ ...dataDate, day: day, month: month, year: year, hour: hour })
            }
        }
        dataDateSet()
    }, []
    )

    const [form, setForm] = useState<{ name: string | null, email: string | null, reason: string | null }>({
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
        setappointment(appointment)
        console.log(res);
    }


    return (

        <div className="flex justify-center items-center p-20 bg-teal-50 bg-[url('/src/assets/backgroundImage.png')] bg-cover"  >
            <div className="border flex border-gray-400 rounded-lg p-14 bg-white flex-col h-auto justify-around space-y-4">
                <h1 className='text-teal-700 font-sans'><b>APPOINTMENT CREATION FORM</b></h1>
                <Input required id="outlined-basic" label="Name" variant="outlined" name="name" onChange={onChange} />
                <Input required id="outlined-basic" label="Email" variant="outlined" name="email" onChange={onChange} />
                <Input id="outlined-multiline-static" label="Please tell us your reason" multiline rows={4} name='reason' onChange={onChange} />
                {res === 400 ? (
                    <Error severity="error">Please fill in the required fields (*)</Error>
                ) : <Error variant="outlined" severity="info">Fields marked with (*) are required</Error>}
                <Button sx={{ backgroundColor: '#10403B', color: 'white', borderColor: '#10403B' }} variant='outlined' onClick={handlerSubmit} >Make a date</Button>
            </div>
        </div>
    )
}