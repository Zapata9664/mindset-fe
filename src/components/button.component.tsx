import React, { Attributes } from 'react'
import { Button as ButtonComponent, ButtonProps } from '@mui/material'

export const Button = (props: Attributes & JSX.IntrinsicAttributes & ButtonProps) => {
    return (
        <div>
            <ButtonComponent {...props}></ButtonComponent>
        </div>
    )
}
