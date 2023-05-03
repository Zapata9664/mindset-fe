import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const DropDown = (props: JSX.IntrinsicAttributes & TextFieldProps) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={cases}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Selecciona una razón" />}
    />
  );
}

const cases = [
  { label: 'Depresion'},
  { label: 'Ansiedad' },
  { label: 'Terapia de parejas' },
];