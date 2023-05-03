import React from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField';

export const Input = (props: JSX.IntrinsicAttributes & TextFieldProps) => {
    return (
        <TextField {...props} />
    )
}
