import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import eng1 from '../../assets/images/resource/service-1.jpg';
import eng2 from '../../assets/images/resource/dk.jpg';
import eng3 from '../../assets/images/resource/service-3.jpg';
import eng4 from '../../assets/images/resource/service-4.jpg';
import eng5 from '../../assets/images/resource/pexels-ranjeet-860714737-27928760.jpg';
import eng6 from '../../assets/images/resource/service-6.jpg';

const images = [eng1, eng2, eng3, eng4, eng5, eng6];

const What = () => {
  return (
    <Box py={6} px={{ xs: 2, sm: 3, md: 12 }}>
      {/* Title */}
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          fontWeight: 700,
        }}
      >
        What We Do
      </Typography>

      {/* Subtitles */}
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: '1.1rem', sm: '1.25rem' },
          fontWeight: 500,
          color: 'text.secondary',
          mb: 1,
        }}
      >
        Services That Help You Grow.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '1rem', sm: '1.05rem' },
          color: 'text.secondary',
          mb: 4,
        }}
      >
        We provide top-notch engineering solutions across a wide range of industries.
      </Typography>

      {/* Image Grid */}
      <Grid container spacing={4}>
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              className="tilt-card"
              sx={{
                width: '100%',
                height: 300,
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              <Box
                className="tilt-inner"
                sx={{
                  width: '100%',
                  height: '100%',
                  transform: 'rotateX(0deg) rotateY(0deg)',
                  transition: 'transform 0.3s ease',
                  borderRadius: 3,
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.25)',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(0,0,0,0.35))',
                    zIndex: 1,
                  },
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const bounds = card.getBoundingClientRect();
                  const x = e.clientX - bounds.left;
                  const y = e.clientY - bounds.top;
                  const centerX = bounds.width / 2;
                  const centerY = bounds.height / 2;
                  const rotateX = -(y - centerY) / 15;
                  const rotateY = (x - centerX) / 15;
                  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default What;
