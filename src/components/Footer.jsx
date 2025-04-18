import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1e1e2f',
        py: 6,
        px: { xs: 2, sm: 4, md: 10 },
        color: 'white',
        boxShadow: '0px -10px 30px rgba(0,0,0,0.3)',
        transformStyle: 'preserve-3d',
      }}
    >
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: '1.2rem', mb: 1 }}
          >
            Innovex Engineering
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
            Empowering industry through innovation and technology.
          </Typography>
          <Typography variant="caption" display="block" sx={{ mt: 2, color: 'gray' }}>
            © {new Date().getFullYear()} All rights reserved.
          </Typography>
        </Grid>

        {/* Center Column: Subscribe */}
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              gap: 2,
              px: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Stay Updated
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}
            >
              Subscribe to our newsletter
            </Typography>

            <Box
              component="form"
              onSubmit={(e) => e.preventDefault()}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                width: '100%',
                maxWidth: 320,
                gap: 1,
              }}
            >
              <input
                type="email"
                placeholder="Your email"
                required
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '4px',
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.95rem',
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#13c46e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '10px 16px',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0fa75d')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#13c46e')}
              >
                Subscribe
              </button>
            </Box>
          </Box>
        </Grid>

        {/* Right Column: Social Icons */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-end' },
              justifyContent: 'center',
              height: '100%',
              gap: 1.5,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Connect With Us
            </Typography>
            <Box>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{
                  color: 'white',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2) rotate(10deg)',
                    color: '#3b5998',
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{
                  color: 'white',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2) rotate(10deg)',
                    color: '#1da1f2',
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{
                  color: 'white',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2) rotate(10deg)',
                    color: '#e1306c',
                  },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{
                  color: 'white',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2) rotate(10deg)',
                    color: '#0077b5',
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
