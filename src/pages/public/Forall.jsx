import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Forall = () => {
  const colors = ['#ff6b6b', '#6bc5ff', '#b96bff', '#6bff9e', '#ffe26b'];

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
        py: 5,
        px: 2,
        // borderRadius: 2,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      {/* Colorful Bubbles */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => {
          const size = 10 + Math.random() * 25;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const duration = 5 + Math.random() * 8;
          const left = Math.random() * 100;
          const delay = Math.random() * 5;

          return (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                bottom: '-80px',
                width: size,
                height: size,
                backgroundColor: color,
                borderRadius: '50%',
                opacity: 0.4 + Math.random() * 0.4,
                filter: 'blur(1px)',
                animation: `riseBubble ${duration}s ease-in infinite`,
                animationDelay: `${delay}s`,
                left: `${left}%`,
              }}
            />
          );
        })}
      </Box>

      {/* Foreground Content - Now in row layout */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'row', // Changed from column to row
          alignItems: 'center',
          justifyContent: 'center', // Center horizontally
          textAlign: 'center',
          gap: 4, // Increased gap for better spacing
          flexWrap: 'wrap', // Allows wrapping on smaller screens
        }}
      >
        <Typography variant='h4' sx={{ fontWeight: 600, color: '#fff', mb: 0 }}>
          For all your queries
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}> {/* Button container with gap */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#fff',
              color: '#000',
              fontWeight: 'bold',
              px: 4,
              py: 1.2,
              borderRadius: '30px',
              textTransform: 'none',
              transition: '0.3s',
              '&:hover': {
                backgroundColor: '#eee',
                transform: 'scale(1.05)',
              },
            }}
          >
            Contact Us
          </Button>
          
          <Button
            variant="outlined"
            sx={{
              borderColor: '#fff',
              color: '#fff',
              fontWeight: 'bold',
              px: 4,
              py: 1.2,
              borderRadius: '30px',
              textTransform: 'none',
              transition: '0.3s',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'scale(1.05)',
                borderColor: '#fff',
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Keyframes */}
      <style>
        {`
          @keyframes riseBubble {
            0% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateY(-1000px) scale(0.7);
              opacity: 0;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Forall;