import React, { useState, useRef, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import slide1 from '../../assets/images/main-slider/image-1.jpg';
import slide2 from '../../assets/images/main-slider/image-2.jpg';
import slide3 from '../../assets/images/main-slider/image-3.jpg';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const splideRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTogglePlay = () => {
    if (isPlaying) {
      splideRef.current?.splide.pause();
    } else {
      splideRef.current?.splide.play();
    }
    setIsPlaying(!isPlaying);
  };

  const imageHeight = isMobile ? 400 : 600;

  const slideContainerStyle = {
    position: 'relative',
    width: '100%',
    height: `${imageHeight}px`,
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const textBoxStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: isMobile ? 'center' : 'flex-start',
    padding: isMobile ? '20px' : '50px',
    color: 'white',
    textAlign: isMobile ? 'center' : 'left',
    background: 'rgba(0, 0, 0, 0.3)', // optional overlay
    boxSizing: 'border-box', // Prevents padding from causing overflow
  };

  const buttonStyle = {
    borderRadius: '20px',
    height: '50px',
    width: '150px',
    marginRight: isMobile ? '0px' : '10px',
    marginBottom: isMobile ? '10px' : '0',
  };

  const colors = ['#ff6b6b', '#6bc5ff', '#b96bff', '#6bff9e', '#ffe26b'];

  return (
    <Box sx={{ width: '100%', margin: '0 auto', position: 'relative' }}>
      <Splide
        ref={splideRef}
        options={{
          interval: 3000,
          pagination: false,
          perPage: 1,
          rewind: true,
          type: 'loop',
          autoplay: true,
          arrows: false,
        }}
      >
        {[slide1, slide2, slide3].map((slide, index) => (
          <SplideSlide key={index}>
            <Box sx={slideContainerStyle}>
              <img src={slide} alt={`Slide ${index + 1}`} style={imageStyle} />

              {/* Floating Bubbles inside each slide */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  zIndex: 0,
                  overflow: 'hidden',
                }}
              >
                {Array.from({ length: 20 }).map((_, i) => {
                  const size = 10 + Math.random() * 25;
                  const color = colors[Math.floor(Math.random() * colors.length)];
                  const duration = 5 + Math.random() * 8;
                  const left = Math.random() * 100;
                  const delay = Math.random() * 5;
                  const rotation = Math.random() * 360; // Rotation effect
                  const horizontalMovement = Math.random() * 20 - 10; // Slight horizontal movement

                  return (
                    <Box
                      key={i}
                      sx={{
                        position: 'absolute',
                        bottom: '-80px',
                        width: size,
                        height: size,
                        backgroundColor: color,
                        borderRadius: '50%',
                        opacity: 0.4 + Math.random() * 0.5, // More transparent bubbles
                        filter: 'blur(2px)', // Slightly more blurred
                        animation: `riseBubble ${duration}s ease-in infinite`,
                        animationDelay: `${delay}s`,
                        left: `${left}%`,
                        transform: `rotate(${rotation}deg) translateX(${horizontalMovement}px)`, // Added rotation and horizontal movement
                      }}
                    />
                  );
                })}
              </Box>

              <Box sx={textBoxStyle}>
                {index === 0 && (
                  <>
                    <Typography
                      variant={isMobile ? 'h5' : 'h2'}
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      Build A Better Carrier With Us.
                    </Typography>
                    <Typography
                      variant={isMobile ? 'h6' : 'h2'}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      Industrial Solutions
                    </Typography>
                    <Typography variant="body1">We construct your vision</Typography>
                    <Typography variant="body1">Build A Better Carrier With Us.</Typography>
                  </>
                )}

                {index === 1 && (
                  <>
                    <Typography
                      variant={isMobile ? 'h5' : 'h2'}
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      Modern technology
                    </Typography>
                    <Typography
                      variant={isMobile ? 'h6' : 'h2'}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      for your industry
                    </Typography>
                    <Typography variant="body1">We construct your vision</Typography>
                    <Typography variant="body1">It’s all about mechanics</Typography>
                  </>
                )}

                {index === 2 && (
                  <>
                    <Typography
                      variant={isMobile ? 'h5' : 'h2'}
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      Deserve for best
                    </Typography>
                    <Typography
                      variant={isMobile ? 'h6' : 'h2'}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      industrial Solutions
                    </Typography>
                    <Typography variant="body1">
                      Solutions built for industry and the future
                    </Typography>
                    <Typography variant="body1">
                      Delivering trusted quality across the USA
                    </Typography>
                  </>
                )}

                <Box
                  sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    justifyContent: isMobile ? 'center' : 'flex-start', // Ensure buttons are centered on mobile
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      ...buttonStyle,
                      background: index === 2 ? '#ffea00' : '#13c46e',
                      color: 'black',
                      ':hover': {
                        backgroundColor: 'transparent',
                        color: index === 2 ? 'yellow' : '#13c46e',
                        border: `1px solid ${index === 2 ? 'yellow' : '#13c46e'}`,
                      },
                    }}
                  >
                    Get Quote
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      ...buttonStyle,
                      color: 'white',
                      borderColor: 'grey.500',
                      ':hover': {
                        backgroundColor: index === 2 ? 'yellow' : '#13c46e',
                        color: 'black',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Box>
          </SplideSlide>
        ))}
      </Splide>

      {/* Keyframes for Floating Bubbles with Enhanced Effects */}
      <style>
        {`
          @keyframes riseBubble {
            0% {
              transform: translateY(0) scale(1) rotate(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-1000px) scale(0.7) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Banner;
