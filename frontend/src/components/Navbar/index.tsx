import { AppBar } from "@mui/material"
import { ContentBox } from "../ContentBox"
import { Link } from 'react-router-dom'
import { Box } from "@mui/system"

export const Navbar = () => {

  return ( 
    <AppBar sx={{backgroundColor: "#595959"}} >
      <ContentBox>
        <Box sx={{display: 'flex',alignItems: 'center', gap: "10px"}}>
        <h1><Link to="/" style={{textDecoration:'none',color: "white"}}>Puccando</Link> </h1>

        <Link to="users" style={{color: "white", fontSize: '1.2rem',textDecoration:'none',verticalAlign:"middle"}}>Ver usuarios</Link> 
        </Box>
      </ContentBox>
    </AppBar>
  )
}