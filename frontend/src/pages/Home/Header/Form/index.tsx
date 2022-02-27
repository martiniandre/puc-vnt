import { Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { ChangeEvent, FormEvent, useReducer, useState } from "react"
import { useTranslation } from "react-i18next"
import { User } from "../../../../types/user"
import { CustomInput } from "./styles"

const emailReducer = (state: {value: string}, action: {type: string, value: string}) => {
  if(action.type === 'USER_INPUT') {
      return { value: action.value, isValid: action.value.includes('@') };
  }
  if( action.type === 'FORM_CLEANUP'){
      return { value: '', isValid: false};
  }
  return {value: '', isValid: false};
}

const passwordReducer = (state: {value: string}, action: {type: string, value: string}) => {
  if(action.type === 'USER_INPUT') {
      return { value: action.value, isValid: action.value.trim().length > 8 };
  }
  if( action.type === 'FORM_CLEANUP'){
      return { value: '', isValid: false};
  }
  return {value: '', isValid: false};
}

type FormProps = {
  onUserRegister: (user: User) => void
}

const initialUsername = {
  firstName: '',
  lastName: ''
}

const initialErrorState = { email: false, password: false }

export const Form = ({ onUserRegister }: FormProps) => {
  const { t } = useTranslation();

  const [errors,setErrors] = useState(initialErrorState);

  const [username,setUsername] = useState(initialUsername) 

  const [email, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false})
  const [password, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false})
  /* const [email,dispatch] = useReducer(emailReducer,) */

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name,value } = event.target
    setUsername({
      ...username,
      [name]: value
    })
  }

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: 'USER_INPUT', value: event.target.value})
    setErrors({...errors, email: email.isValid})
}

const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchPassword({ type: 'USER_INPUT', value: event.target.value})
    setErrors({...errors, password: password.isValid})
}


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const user = {
      firstName: username.firstName,
      lastName: username.lastName,
      email: email.value,
      password: password.value
    }

    onUserRegister(user)
    setUsername(initialUsername)
    dispatchEmail({ type: 'FORM_CLEANUP',value:''})
    dispatchPassword({ type: 'FORM_CLEANUP', value: '' })
  }

  return (
    <Box 
      component="form"
      sx={{
        maxWidth: '450px',
        background: "white",
        color: 'black',
        padding: 5,
        marginLeft: 'auto',
        textAlign: 'center'
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" >{t('Login')}</Typography>
      <Typography variant="subtitle1">{t('LoginFacil')}</Typography>
      <Button>{t('GoogleLogin')}</Button>

      <Typography variant="subtitle1">{t('Email')}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomInput
            type="text"
            name="firstName"
            value={username.firstName}
            required
            placeholder="Your first name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomInput
          sx={{width: '100%'}}
            type="text"
            name="lastName"
            value={username.lastName}
            required
            placeholder="Your last name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            id="emailAddress"
            type="email"
            required
            value={email.value}
            placeholder="Your email address"
            onChange={emailChangeHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            id="password"
            type="password"
            value={password.value}
            required
            placeholder="Pick a password"
            onChange={passwordChangeHandler}
          />
        </Grid>
      </Grid>
      <Button variant="contained" sx={{width: '100%',marginTop: 1}} type="submit">Sign up</Button>  
    </Box>
  )
}