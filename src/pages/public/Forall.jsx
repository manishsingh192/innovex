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
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      {/* Unique Bubbles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {Array.from({ length: 25 }).map((_, i) => {
          const size = 20 + Math.random() * 40;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const duration = 8 + Math.random() * 10; // Duration between 8s to 18s
          const left = Math.random() * 100; // Random horizontal position
          const delay = Math.random() * 6; // Random delay before animation starts
          const blur = 1 + Math.random() * 3; // Random blur
          const z = Math.floor(Math.random() * 3); // Random z-index for layering

          return (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                bottom: '-100px',
                width: size,
                height: size,
                background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
                borderRadius: '50%',
                opacity: 0.3 + Math.random() * 0.4, // Random opacity
                filter: `blur(${blur}px)`,
                animation: `riseBubble${z} ${duration}s ease-in infinite`,
                animationDelay: `${delay}s`, // Random delay to start animation
                left: `${left}%`, // Random horizontal positioning
                zIndex: z, // Random z-index
              }}
            />
          );
        })}
      </Box>

      {/* Foreground Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: { xs: 2, sm: 4 },
          flexWrap: 'wrap',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: '#fff',
            mb: 0,
            fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
          }}
        >
          For all your queries
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
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

      {/* Keyframes for continuous bubble animations */}
      <style>
        {`
          @keyframes riseBubble0 {
            0% {
              transform: translateY(0) scale(1) rotate(0deg);
              opacity: 0.9;
            }
            100% {
              transform: translateY(-900px) scale(0.8) rotate(360deg);
              opacity: 0;
            }
          }
          @keyframes riseBubble1 {
            0% {
              transform: translateY(0) scale(1.2) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(-1000px) scale(0.6) rotate(720deg);
              opacity: 0;
            }
          }
          @keyframes riseBubble2 {
            0% {
              transform: translateY(0) scale(0.9) rotate(0deg);
              opacity: 0.7;
            }
            100% {
              transform: translateY(-1100px) scale(1.1) rotate(-360deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Forall;
