import { Box, Grid } from '@mui/material'
import { Information } from './Information'
import { Form } from './Form'
import { ContentBox } from '../../../components/ContentBox'
import { User } from '../../../types/user'
import { CREATE_USER } from '../../../graphql/Mutations'
import { useMutation } from '@apollo/client'

export const HomeHeader = () => {
  const [createUser, {error: err}] = useMutation(CREATE_USER)

  const onUserRegister = async (user: User) => {
   await  createUser({
      variables: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password
      }
    })

    if(err){
      console.log(err);
    }
  }


  return (
    <Box sx={{ backgroundColor:"#595959", color: "white",paddingBottom: '20px', marginTop: 10,padding: 10 }} >
      <ContentBox>
        <Grid container >
          <Grid item xs={6}>
            <Information/>
          </Grid>
          <Grid item xs={6}>
              <Form onUserRegister={onUserRegister}/>
          </Grid>
          </Grid>
      </ContentBox>
    </Box>
  )
}