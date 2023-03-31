import React, {useState} from 'react'
import { Input } from '../components/input.component'
import { Button } from '../components/button.component'

export const Form = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        reason: '',

    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handlerSubmit = () => {
        console.log(form)
    }




    return (
        <div className="flex justify-center items-center p-20">
      <div className="border flex border-gray-400 rounded-lg p-11 bg-white flex-col h-96 justify-around">
        <Input id="outlined-basic" label="Name" variant="outlined" name="name" onChange={onChange} />
        <Input id="outlined-basic" label="Email" variant="outlined" name="email" onChange={onChange} />
        <Input id="outlined-basic" label="Reason" variant="outlined" name='reason' type="password" onChange={onChange} />
        <Button sx={{ backgroundColor: '#10403B', color: 'white', BorderColor: '#10403B' }} variant='outlined' onClick={handlerSubmit} >Make a date</Button>
        </div>
        </div>
        

    )
}