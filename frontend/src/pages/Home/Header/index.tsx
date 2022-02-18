import { Box, Grid } from '@mui/material'
import { Information } from './Information'
import { Form } from './Form'
import { ContentBox } from '../../../components/ContentBox'
import { User } from '../../../types/user'
import { usePost } from '../../../hooks/customPost'

export const HomeHeader = () => {
  const { apiPost } = usePost('/user')


  const onUserRegister = async (user: User) => {
    await apiPost(user)
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