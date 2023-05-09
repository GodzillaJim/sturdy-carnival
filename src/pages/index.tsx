import {Box, Container, styled} from "@mui/material";
import CustomNavBar from "@src/components/NavBar";
import LeftSideBar from "@src/components/LeftSideBar";

const StyledContainer = styled(Container)(({ theme }) => ({
  height: '100vh',
  background: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('xs')]: {
    padding: 0
  }
}))


const Home = () => {
  return <StyledContainer maxWidth={"xl"}>
    <div>
      <CustomNavBar/>
    </div>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <LeftSideBar/>
      </div>
    </Box>
    Hello world
  </StyledContainer>
}

export default Home
