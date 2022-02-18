import { Box } from '@mui/system';

type Props = {
  children: React.ReactNode;
};

export const ContentBox = ({ children }: Props) => {
  return (
    <>
       <Box sx={{width: '100%',maxWidth: 1280, margin: '0 auto'}}>
          {children}
        </Box>
    </>
  )
}