import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import { ContentBox } from "../../../components/ContentBox"
import { ReviewCard } from "../../../components/ReviewCard"
import { Review } from "../../../types/review"

export const Reviews = () => {
  const reviews: Review[] = [
    {name: "Andre",photo:"",description: ''},
    {name: "Andre",photo:"",description: ''},
    {name: "Andre",photo:"",description: ''},
    {name: "Andre",photo:"",description: ''}
  ]

  return (
    <Box component="main" sx={{marginTop: 5}}>
      <ContentBox>
        <Grid container spacing={4}>
          {reviews.map((review,index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <ReviewCard review={review}/>
            </Grid>
          ))}
        </Grid>
      </ContentBox>
    </Box>
  )
}