import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h2>Signup page</h2>
        <TextField label="Name" variant="outlined" />
        <br />
        <TextField label="Age" variant="outlined" />          
        <br />
        <TextField label="Department" variant="outlined" />
        <br />
        <TextField label="Password" variant="outlined" />
        <br />

<Button variant="contained" color="success">
  Success
</Button>        
    </div>

  )
}

export default Signup