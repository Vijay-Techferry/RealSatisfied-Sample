// import { TextField } from '@radix-ui/themes'
import { TextField } from '@mui/material'
import React from 'react'

const CommonInput = () => <TextField onChange={(e)=>console.log(e.target.value)}/>

export default CommonInput