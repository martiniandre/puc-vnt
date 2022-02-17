import { Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { CustomInput } from "./styles"

export const Form = () => {
  const [errors,setErrors] = useState(null)

  return (
    <Box 
      component="form"
      sx={{
        maxWidth: '450px',
        background: "white",
        color: 'black',
        padding: 5,
        marginLeft: 'auto'
      }}
    >
      <Typography variant="h4">Sign up </Typography>
      <Typography variant="subtitle1">Quick Sign Up</Typography>
      <Button>Sign up with Google</Button>

      <Typography variant="subtitle1">Or use your email address</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomInput
            id="outlined-multiline-flexible"
            value=''
            placeholder="Your first name"
            onChange={() => {}}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomInput
          sx={{width: '100%'}}
            id="outlined-multiline-flexible"
            value=''
            placeholder="Your last name"
            onChange={() => {}}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            id="outlined-multiline-flexible"
            value=''
            placeholder="Your email address"
            onChange={() => {}}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            id="outlined-multiline-flexible"
            value=''
            placeholder="Pick a password"
            onChange={() => {}}
          />
        </Grid>
      </Grid>
      {errors && <Typography variant="subtitle1">{errors}</Typography>}
      <Button variant="contained" sx={{width: '100%',marginTop: 1}}>Sign up</Button>  
    </Box>
  )
}