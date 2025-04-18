import React from 'react';
import {
  Box,
  Typography,
  Grid,
} from '@mui/material';
import ab1 from '../../assets/images/about/aboutt.jpg';
import ab2 from '../../assets/images/about/about2.jpg';

// Icons
import MemoryIcon from '@mui/icons-material/Memory';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import BuildIcon from '@mui/icons-material/Build';
import GradeIcon from '@mui/icons-material/Grade';
import PeopleIcon from '@mui/icons-material/People';
import Forall from './Forall';

const features = [
  { label: 'Modern Technology', icon: <MemoryIcon sx={{ fontSize: 40, color: '#13c46e' }} /> },
  { label: 'Expert Engineer', icon: <BuildIcon sx={{ fontSize: 40, color: '#13c46e' }} /> },
  { label: 'Best Quality', icon: <GradeIcon sx={{ fontSize: 40, color: '#13c46e' }} /> },
];

const workSteps = [
  { label: 'Client Needs', icon: <PeopleIcon sx={{ fontSize: 40, color: '#13c46e' }} /> },
  { label: 'Planning Design', icon: <DesignServicesIcon sx={{ fontSize: 40, color: '#13c46e' }} /> },
  { label: 'Architect Sketch', icon: <ArchitectureIcon sx={{ fontSize: 40, color: '#13c46e' }} /> },
  { label: 'Start Product', icon: <BuildIcon sx={{ fontSize: 40, color: '#13c46e' }} /> },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${ab1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ p: 2, borderRadius: 2 }}>
          About
        </Typography>
      </Box>

      {/* About Us Section */}
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
          py: 5,
          background: 'linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%)',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#13c46e',
            position: 'relative',
            display: 'inline-block',
            mb: 3,
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '70%',
              height: '4px',
              background: 'linear-gradient(to right, #13c46e, #00c2ff)',
              bottom: -6,
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: '2px',
            },
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          About Us
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontStyle: 'italic', mb: 3 }}
        >
          We train leaders who change the world.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.8,
            color: '#424242',
          }}
        >
          Mechanical engineers don’t just react to society’s needs. They innovate;
          they lead. They set the agenda and guide the conversation. We prepare
          students to make an impact in the world, through a robust curriculum,
          meaningful research opportunities, and rich design experiences.
        </Typography>
      </Box>

      {/* Why Choose Us Section */}
      <Grid container sx={{ minHeight: { xs: 'auto', md: '80vh' }, px: { xs: 2, sm: 3, md: 12, lg: 12 } }}>
        {/* Image Side */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={ab2}
            alt="Why Choose Us"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Grid>

        {/* Content Side */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            py: { xs: 4, md: 6 },
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography variant="h4" gutterBottom>
            🛠️ Why Choose Us
          </Typography>
          <Typography variant="h5" gutterBottom>
            Reason for people choosing Innovex Engineering
          </Typography>

          {/* Grid Icons Box */}
          <Box
            sx={{
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: 2,
              mt: 3,
              p: { xs: 2, md: 3 },
            }}
          >
            <Grid container spacing={2}>
              {features.map((item, index) => (
                <Grid key={index} item xs={12} sm={4} textAlign="center">
                  {item.icon}
                  <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: 500 }}>
                    {item.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Work Process Section */}
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
          py: 8,
          background: '#f9f9f9',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#13c46e',
            mb: 2,
          }}
        >
          Work Process
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mb: 5 }}>
          Our Working Process
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {workSteps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                  '&::after': {
                    content: index !== workSteps.length - 1 ? '"→"' : '""',
                    position: 'absolute',
                    right: '-20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '24px',
                    color: '#13c46e',
                    display: { xs: 'none', md: 'block' },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    backgroundColor: '#13c46e',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    mb: 2,
                    fontSize: 18,
                  }}
                >
                  {index + 1}
                </Box>
                {step.icon}
                <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 500 }}>
                  {step.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

<Box>
  <Forall/>
</Box>

    </>
  );
};

export default About;
