import axios from 'axios'
import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"


const TableView = () => {
    var [Student,setstudent]=useState([])
          axios.get("http://localhost:3000/view")
          .then((res)=>{
            console.log(res.data)
            setstudent(res.data)
          })
  return (
    <div>
        <TableContainer>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">age</TableCell>
            <TableCell align="right">department</TableCell>
            <TableCell align="right">password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Student.map((val) => {
            return(
      
             <TableRow>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
            </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default TableView