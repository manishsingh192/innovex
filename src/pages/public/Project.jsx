import React, { memo } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';
import con1 from '../../assets/contact/con1.png';
import contactData from '../../mydata/pData';
import Forall from './Forall';

const Project = () => {
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
          }}
        >
          Project
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

                  {/* 🔍 Image with Zoom Effect (no Icon) */}
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

export default memo(Project);
