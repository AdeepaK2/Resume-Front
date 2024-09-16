import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

function NavBar() {
    return (
        // sx={}
        <AppBar position="static" sx={{ width: '100%', backgroundColor: '#F5F5F5',color:'black'  }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ flexGrow: 1 ,fontFamily:'Fira Code'}}>
                        adeep<span style={{ color: 'red', fontWeight: 'bold' }}>a.k</span>ularathna
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2}}>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Portfolio</Button>
                    <Button color="inherit">Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
