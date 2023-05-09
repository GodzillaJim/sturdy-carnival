import {Avatar, Box, Card, CardContent, styled, Typography} from "@mui/material";

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: 250,
    justifyContent: 'center'
})

const CustomAvatar = styled(Avatar)(({ theme }) => ({
    width: 100,
    height: 100,
    margin: "auto",
    marginBottom: theme.spacing(2)
}))

const CustomBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    justifyContent: 'center'
})
const LeftSideBar = () => {
    return <Container>
        <Card>
            <CardContent>
                <CustomBox>
                    <CustomAvatar/>
                    <Typography textAlign={'center'} variant={'caption'}>Jimna Njoroge</Typography>
                    <Typography textAlign={'center'} variant={'caption'}>Software Engineer</Typography>
                </CustomBox>
            </CardContent>
        </Card>
    </Container>
}

export default LeftSideBar

