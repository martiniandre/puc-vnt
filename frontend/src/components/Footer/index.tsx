import { Typography } from "@mui/material"
import { Box } from "@mui/system"

export const Footer = ( ) => {
  return (
    <Box sx={{textAlign: 'center'}}>
      <Typography variant="h4">Kingler Company</Typography>
      <Typography variant="subtitle1">Krabbynpm g</Typography>
      <svg id="wave" viewBox="0 0 1440 110" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,55L240,99L480,99L720,55L960,55L1200,0L1440,44L1680,66L1920,99L2160,0L2400,66L2640,11L2880,0L3120,88L3360,99L3600,99L3840,77L4080,0L4320,22L4560,11L4800,44L5040,99L5280,33L5520,0L5760,11L5760,110L5520,110L5280,110L5040,110L4800,110L4560,110L4320,110L4080,110L3840,110L3600,110L3360,110L3120,110L2880,110L2640,110L2400,110L2160,110L1920,110L1680,110L1440,110L1200,110L960,110L720,110L480,110L240,110L0,110Z"></path></svg>
    </Box>
  )
}