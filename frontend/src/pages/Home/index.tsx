import { Box } from "@mui/material"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { HomeHeader } from "./Header"
import { Reviews } from "./Reviews"

const Home = () => {
  return (
    <Box>
      <Navbar/>
      <HomeHeader/>
      <Box component="main" sx={{padding: "20px 0"}}>
        <Reviews/>
      </Box>
      <Footer/>
    </Box>
  )
}

export default Home;