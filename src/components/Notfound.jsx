import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        textAlign: 'center',
        p: 4,
        perspective: '1000px',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          transform: 'rotateX(10deg) rotateY(-5deg)',
          color: '#333',
          mb: 2,
          textShadow: '2px 2px 10px rgba(0,0,0,0.2)',
        }}
      >
        404 - Page Not Found
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, maxWidth: '500px', color: '#666' }}>
        Oops! The page you are looking for does not exist or has been moved.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: '30px',
          background: '#1976d2',
          color: '#fff',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          transition: '0.3s ease',
          '&:hover': {
            background: '#115293',
            transform: 'scale(1.05)',
          },
        }}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFound;
