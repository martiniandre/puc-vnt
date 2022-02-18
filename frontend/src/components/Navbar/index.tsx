import { AppBar } from "@mui/material"
import { ContentBox } from "../ContentBox"

export const Navbar = () => {
  return ( 
    <AppBar sx={{backgroundColor: "#595959",color: 'white'}} >
      <ContentBox>
        <h1>Puccando</h1>
      </ContentBox>
    </AppBar>
  )
}