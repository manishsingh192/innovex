import React, { useState, useEffect } from 'react';
import { Avatar, Box, Container, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight, FormatQuote, MoreVert } from '@mui/icons-material';
import "@fontsource/lora";
import t1 from '../../assets/images/resource/author-1.jpg';
import t2 from '../../assets/images/resource/author-2.jpg';
import t3 from '../../assets/images/resource/author.jpg';

const testimonials = [
  {
    id: 1,
    name: 'MICHALE JOE',
    image: t1,
    quote: 'Proactively envisioned multimedia-based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products, whereas parallel platforms holistically predominate.',
  },
  {
    id: 2,
    name: 'SARAH CONNOR',
    image: t2,
    quote: 'envisioned multimedia-based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products, whereas parallel platforms holistically predominate.',
  },
  {
    id: 3,
    name: 'JOHN DOE',
    image: t3,
    quote: ' multimedia-based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products, whereas parallel platforms holistically predominate.',
  },
];

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      style={{
        backgroundColor: '#f4d03f',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <IconButton
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      >
        <MoreVert />
      </IconButton>

      <Container maxWidth="md">
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            padding: '64px 0',
          }}
        >
          <IconButton 
            onClick={handlePrev} 
            style={{ 
              border: '1px solid', 
              borderRadius: '50%' 
            }}
          >
            <ChevronLeft />
          </IconButton>

          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            <Avatar
              src={testimonials[currentIndex].image}
              style={{
                width: 120,
                height: 120,
                border: '4px solid white',
              }}
            />

            <Box
              style={{
                backgroundColor: '#333',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FormatQuote style={{ color: 'white' }} />
            </Box>

            <Typography
              variant="body1"
              style={{
                maxWidth: '800px',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                marginBottom: '16px',
              }}
            >
              {testimonials[currentIndex].quote}
            </Typography>

            <Typography
              variant="subtitle1"
              style={{
                fontWeight: 'bold',
                letterSpacing: 1,
              }}
            >
              {testimonials[currentIndex].name}
            </Typography>
          </Box>

          <IconButton 
            onClick={handleNext} 
            style={{ 
              border: '1px solid', 
              borderRadius: '50%' 
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default TestimonialSlider;
