import React from 'react';
import { Box, Typography } from '@mui/material';

const Maincart = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            border: 'solid 2px black',
            backgroundColor: '#F5F5F5',
            borderRadius: '10px',
            overflow: 'hidden',
            width: '97%',
            margin: '0 auto',
            padding: '40px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
        }}>
            <Box sx={{
                flex: 1,
                textAlign: 'left',
                padding: '20px', // Added padding to text container
            }}>
                <Typography variant="h6" sx={{ color: '#FF5757', marginBottom: '10px' }}>
                    Hi, I'm
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333333' }}>
                    Adeepa SHashintha Kularathna
                </Typography>
                <Typography variant="h6" sx={{ color: '#555555' }}>
                    Designer/Developer
                </Typography>
            </Box>
            <Box sx={{
                flexShrink: 0,
                padding: '20px', // Added padding to the image container
            }}>
                <img src="/main.jpg" alt="description" style={{ width: '250px', height: 'auto', borderRadius: '5px' }} />
            </Box>
        </Box>
    )
};

export default Maincart;

