import { Box } from "@mui/material"
import { HomeHeader } from "./Header"
import { Reviews } from "./Reviews"
import Layout from "../../containers"

const Home = () => {
  return (
    <Layout>
      <HomeHeader/>
      <Box component="main" sx={{padding: "20px 0"}}>
        <Reviews/>
      </Box>
    </Layout>
  )
}

export default Home;