import React from 'react';
import { Box, Typography, Chip } from '@mui/material';


const Project= ({ image, title, techStack, date }) => {
    return (
        <Box sx={{
            maxWidth: '300px',
            margin: '20px',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid #e0e0e0',  // Classy border
            backgroundColor: '#F5F5F5',
            transition: 'transform 0.3s ease',
            '&:hover': {
                transform: 'scale(1.05)',
            },
            textAlign: 'center'  // Centering the text
        }}>
            <Box sx={{ height: '180px', overflow: 'hidden' }}>
                <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
            </Box>
            <Box sx={{ padding: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
                    {title}
                </Typography>
                <Box sx={{ marginBottom: '15px' }}>
                    {techStack.map((tech, index) => (
                        <Chip
                            key={index}
                            label={tech}
                            sx={{ marginRight: '5px', marginBottom: '5px' }}
                        />
                    ))}
                </Box>
                <Typography variant="body2" sx={{ color: '#888888' }}>
                    {date}
                </Typography>
            </Box>
        </Box>
    );
};

export default Project;

