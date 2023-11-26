import {Box, Avatar, Typography, AppBar,Container, Toolbar} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ForumIcon from '@mui/icons-material/Forum';

function ChatBox({profile}){
    
    return (
        <Box
            sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
        >
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ForumIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            Chat with {profile.displayName}
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{ position: 'relative', 
                        backgroundImage: `url(${profile.avatar})`,
                        backgroundSize: 'cover', // Add this line
                        backgroundRepeat: 'no-repeat', // Add this line
                        backgroundPosition: 'bottom', // Add this line
                        '::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        height: '80vh',
                        width: '68vw',
                        marginTop: 1}}>
            </Box>
        </Box>
    )
}

export default ChatBox;