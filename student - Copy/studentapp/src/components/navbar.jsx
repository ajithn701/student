import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <h2>Student App</h2>&nbsp;
            <Link to="/">
            <Button variant='contained' color='error'>Login</Button>&nbsp;
            </Link>&nbsp;
            <Link to="/s">
            <Button variant='contained' color='error'>Signup</Button>&nbsp;
            </Link>&nbsp;
            <Link to="/table">
            <Button variant='contained' color='error'>table</Button>&nbsp;
            </Link>&nbsp;
        
        </Toolbar>
      </AppBar>
      <br /><br /><br />
    </div>
  )
}

export default Navbar
