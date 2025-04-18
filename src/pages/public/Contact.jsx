import { Box, Typography, keyframes } from '@mui/material';
import React from 'react';
import Form from './Form';
import c1 from '../../assets/contact/contact.jpg';

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

const Contact = () => {
  return (
    <>
      {/* Background Image with Text Overlay */}
      <Box
        sx={{
          backgroundImage: `url(${c1})`,
          backgroundSize: 'cover',
          minHeight: '60vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          textAlign: 'center',
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
          Contact
        </Typography>
      </Box>

      {/* Form Section */}
      <Box sx={{ px: { xs: 2, sm: 4, md: 10 }, py: 6 }}>
        <Form />
      </Box>
    </>
  );
};

export default Contact;
