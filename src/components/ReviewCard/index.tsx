import { Card, CardContent, Typography } from "@mui/material";
import { Review } from "../../types/review";

import { Box } from "@mui/system";


type CardProps = {
  review: Review;
}

export const ReviewCard = ({review}: CardProps) => {
  return (
    <Card sx={{ background: 'transparent',boxShadow: 'none' }}>
      <CardContent sx={{display:"flex",alignItens:"center",gap: 5}}>
          <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" alt="" width="150" height="150"/>
          <Box>
          <Typography variant="h5" component="div">
              {review.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusamus quibusdam quasi ratione nihil hic ea inventore totam sequi esse deleniti necessitatibus suscipit, adipisci possimus fugiat illo, voluptatum tempora repellendus.
          </Typography>
          </Box>
      </CardContent>
    </Card>
  )
}