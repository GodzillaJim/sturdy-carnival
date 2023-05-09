import {AppBar, Box, IconButton, styled, Toolbar} from "@mui/material";
import {Menu, MoreVert} from "@mui/icons-material";

const Wrapper = styled(Box)({
    flexGrow: 1
})

const CustomAppBar = styled(AppBar)({
    height: '60px'
})

const CustomIconButton = styled(IconButton)({
    marginRight: 2,
})

const CustomBox = styled(Box)({
    display: 'flex',
    flexDirection:"row",
    justifyContent: 'space-between',
    width: '100%'
})

const CustomNavBar = () => {
    return <Wrapper>
        <CustomAppBar elevation={1}  position={'sticky'} >
            <Toolbar>
                <CustomBox>
                    <CustomIconButton size={'large'} edge={'start'} >
                        <Menu/>
                    </CustomIconButton>
                    <CustomIconButton>
                        <MoreVert/>
                    </CustomIconButton>
                </CustomBox>
            </Toolbar>
        </CustomAppBar>
    </Wrapper>
}

export default CustomNavBar
