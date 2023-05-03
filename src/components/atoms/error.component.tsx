import React from 'react';
import Alert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const Error= (props: JSX.IntrinsicAttributes & AlertProps) => {
  return (
      <Alert {...props}></Alert>
  );
}