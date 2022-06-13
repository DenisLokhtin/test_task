import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";

const Navigation: () => JSX.Element = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to={'/'} className='headerLink'>
                        News
                    </Link>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Link to={'/createNews'} className='link'>
                            Create news
                        </Link>
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Link
                            to={"/profile"}
                            className='link'
                        >
                            Profile
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navigation;