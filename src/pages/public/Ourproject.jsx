import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import p1 from '../../assets/images/gallery/1.jpg';
import p2 from '../../assets/images/gallery/2.jpg';
import p3 from '../../assets/images/gallery/3.jpg';
import p4 from '../../assets/images/gallery/4.jpg';
// import p5 from '../../assets/images/gallery/5.jpg';

const projectData = [
  { id: 1, title: '3D CAD Modeling', description: 'Designed mechanical components and assemblies using SolidWorks and AutoCAD.', image: p1 },
  { id: 2, title: 'Thermal Heat Sink Analysis', description: 'Analyzed heat dissipation performance of heat sinks using ANSYS.', image: p2 },
  { id: 3, title: 'Robotic Arm Design', description: 'Developed a functional robotic arm prototype using Arduino and servo motors.', image: p3 },
  { id: 4, title: 'CFD Simulation of Airflow', description: 'Performed Computational Fluid Dynamics simulations to optimize ventilation systems.', image: p4 },

  { id: 1, title: '3D CAD Modeling', description: 'Designed mechanical components and assemblies using SolidWorks and AutoCAD.', image: p1 },
  { id: 2, title: 'Thermal Heat Sink Analysis', description: 'Analyzed heat dissipation performance of heat sinks using ANSYS.', image: p2 },
  { id: 3, title: 'Robotic Arm Design', description: 'Developed a functional robotic arm prototype using Arduino and servo motors.', image: p3 },
  { id: 4, title: 'CFD Simulation of Airflow', description: 'Performed Computational Fluid Dynamics simulations to optimize ventilation systems.', image: p4 },
  

];



const Ourproject = () => {
  return (
    <Box sx={{ backgroundColor: 'white', padding: 4 }}>
       <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                textAlign:  'center'
              }}
            >
              Our Project
            </Typography>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ paddingTop: '40px', paddingBottom: '40px' }}
      >
        {projectData.map((project) => (
          <SwiperSlide
            key={project.id}
            style={{
              width: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#1e1e1e',
                borderRadius: 2,
                padding: 2,
                textAlign: 'center',
                boxShadow: '0 0 15px rgba(255,255,255,0.1)',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Typography variant="h6" mt={1} color="white">
                {project.title}
              </Typography>
              <Typography variant="body2" color="gray">
                {project.description}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Ourproject;
