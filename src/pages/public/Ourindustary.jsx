import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import aboutt1 from '../../assets/images/resource/about-1.jpg';
import aboutt2 from '../../assets/images/resource/about-2.jpg';

const Ourindustary = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        py: 6,
        px: { xs: 2, sm: 3, md: 12 },
        perspective: '1500px', // 3D perspective
      }}
    >
      <Grid container spacing={4} alignItems="stretch">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
            }}
          >
            Innovex Engineering
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: '1rem', sm: '1.05rem' },
              color: 'text.secondary',
              mb: 2,
            }}
          >
            We are passionate about engineering innovation and excellence.
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
              fontWeight: 600,
              mb: 1,
            }}
          >
            Our Mission
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: '1rem', sm: '1.05rem' },
              color: 'text.secondary',
              mb: 3,
            }}
          >
            Our mission is to leverage our engineering expertise and creative thinking to solve
            complex challenges and drive positive change in the world. We are committed to delivering
            innovative, sustainable, and cost-effective solutions that exceed our clients' expectations
            and contribute to the advancement of society.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.3rem' },
              color: 'text.primary',
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            We have established ourselves as a leading provider <br />
            of cutting-edge engineering solutions.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={3}>
          <Box
            component="img"
            src={aboutt1}
            alt="About Image 1"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.5s ease, box-shadow 0.5s ease',
              '&:hover': {
                transform: 'translateY(-10px) rotateY(10deg)',
                boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.4)',
              },
            }}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <Box
            component="img"
            src={aboutt2}
            alt="About Image 2"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.5s ease, box-shadow 0.5s ease',
              '&:hover': {
                transform: 'translateY(-10px) rotateY(-10deg)',
                boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.4)',
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ourindustary;
