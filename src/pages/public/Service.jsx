import React, { memo } from 'react';
import {
  Typography,Box,Card
  ,CardContent,
  CardMedia,
  Grid,keyframes
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import con1 from '../../assets/contact/con1.png';
import contactData from '../../mydata/pData';
import Forall from './Forall';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const Service = () => {
  return (
    <>
      {/* 🌄 Background Banner Section */}
      <Box
        sx={{
          backgroundImage: `url(${con1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          px: { xs: 2, sm: 3, md: 12 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textShadow: '1px 1px 5px rgba(0,0,0,0.6)',
            fontWeight: 600,
            animation: `${fadeInUp} 1.2s ease-out`,
          }}
        >
          Our Services
        </Typography>
      </Box>


      {/* 💼 Engineering Services Section */}
      <Box
        sx={{
          py: 6,
          px: { xs: 2, sm: 4, md: 10 },
          backgroundColor: '#ffffff',
          textAlign: 'left',
        }}
      >
        <Typography variant="h4" fontWeight="bold" 
        color="#6724ec" gutterBottom>
          Our Engineering Services
        </Typography>

        {[
          'Design & Drafting (CAD, BIM, 3D Modelling)',
          'Structural & Civil Engineering',
          'Mechanical & Electrical Engineering',
          'Project & Construction Management',
          'Industrial Automation & Robotics',
          'Energy & Environmental Solutions',
          'Feasibility Studies & Technical Consulting',
        ].map((service, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
            <CheckCircleIcon color="success" sx={{ mr: 1 }} />
            <Typography variant="body1">{service}</Typography>
          </Box>
        ))}

        <Typography variant="body1" sx={{ mt: 3 }}>
          At <strong>Innovex Engineering</strong>, we don’t just build systems—we engineer the future.
          <br />
          Partner with us for reliable, innovative, and scalable engineering solutions.
        </Typography>

        <Typography
          variant="h6"
          color="secondary"
          sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}
        >
          📞 Contact Us Today to discuss your project!
        </Typography>
      </Box>


      {/* 📦 Cards Section */}
      <Box
        sx={{
          py: 6,
          px: { xs: 2, sm: 4, md: 10 },
          backgroundColor: '#f5f5f5',
        }}
      >
        <Grid container spacing={4}>
          {contactData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 2,
                  }}
                >
                  {/* 📝 Content with Icon */}
                  <CardContent sx={{ p: 3 }}>
                    {IconComponent && (
                      <Box mb={1} color="primary.main">
                        <IconComponent fontSize="large" />
                      </Box>
                    )}
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </CardContent>

                  {/* 🔍 Image with Zoom Effect */}
                  <Box
                    sx={{
                      overflow: 'hidden',
                      position: 'relative',
                      '&:hover img': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.img}
                      alt={item.title}
                      loading="lazy"
                      sx={{
                        transition: 'transform 0.4s ease-in-out',
                      }}
                    />
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>


      {/* 🔗 Extra Component */}
      <Box>
        <Forall />
      </Box>
    </>
  );
};

export default memo(Service);
