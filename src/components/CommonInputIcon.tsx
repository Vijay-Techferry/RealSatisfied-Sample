import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';

const CommonInputIcon = ({handleClickShowPassword,handleMouseDownPassword,showPassword,label}:{handleClickShowPassword:()=>void,handleMouseDownPassword:()=>void,showPassword:boolean,label:string}) => {
  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="start"
                >
                   <img src={showPassword ?"https://stage-v2.realsatisfied.com/images/eye-slashed.svg":"https://stage-v2.realsatisfied.com/images/eye.svg"} alt="eyeIcon"/>
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
  )
}

export default CommonInputIcon