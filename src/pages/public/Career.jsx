import React, { memo } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,keyframes
} from '@mui/material';

import con1 from '../../assets/contact/ct.jpg';
import contactData from '../../mydata/contactData';
import Forall from './Forall';
import { useNavigate } from 'react-router-dom';


// Animation keyframes
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


const Career = () => {
  const navigate = useNavigate();

  const handleApply = () =>{
    navigate('/applyform')
  } 
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
                    color: 'white',
                    fontWeight: 700,
                    animation: `${fadeInUp} 1.2s ease-out`,
                    // backgroundColor: 'rgba(0,0,0,0.4)',
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                  }}
                >
                  Career
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
          {contactData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.img}
                  alt={item.title}
                  loading="lazy"
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>

         {/* VACANCIES we're CURRENTLY hiring */}
                    <Box sx={{ backgroundColor: '#1e2024', 
                      py: { xs: 2, md: 3, lg: 5 }, 
                      px: { xs: 2, lg: 10, md: 5 } 
                      }}>
                        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
                            <Grid item xs={12} md={4}>
                                <Typography variant="h4" color={'#FFF'} fontWeight={'bold'} lineHeight={1.5}>
                                    <span style={{ fontSize: '16px' }}>VACANCIES</span><br />
                                    WE’RE CURRENTLY<br />
                                    HIRI
                                    <span style={{ backgroundColor: '#ff4155', padding: '0px 50px 0px 0px', display: 'inline-block' }}>NG</span>
                                </Typography>
                            </Grid>
        
                            <Grid item xs={12} md={6} textAlign={'center'}>
        
                                <Typography variant='body2' color='#fff'>Unleash Your Potential, Empower Your Journey with career excellence</Typography>
                            </Grid>
        
                            <Grid item xs={12} md={2}>
                                <Button onClick={handleApply} variant='outlined' sx={{ color: '#fff', border: '1px solid #fff' }}>
                                    Apply Now
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
        <Forall/>
      </Box>
    </>
  );
};

export default memo(Career);
