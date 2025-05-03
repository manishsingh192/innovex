import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  useMediaQuery,
  useTheme,keyframes
} from '@mui/material';
import ab1 from '../../assets/images/about/abbb.jpg';
// import ab2 from '../../assets/images/about/about2.jpg';

// Icons
import MemoryIcon from '@mui/icons-material/Memory';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import BuildIcon from '@mui/icons-material/Build';
import GradeIcon from '@mui/icons-material/Grade';
import PeopleIcon from '@mui/icons-material/People';
import Forall from './Forall';

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

const features = [
  { label: 'Modern Technology', icon: <MemoryIcon sx={{ fontSize: 40, color: '#13c46e' }} /> },
  { label: 'Expert Engineer', icon: <BuildIcon sx={{ fontSize: 40, color: '#13c46e' }} /> },
  { label: 'Best Quality', icon: <GradeIcon sx={{ fontSize: 40, color: '#13c46e' }} /> },
];

const lifecycleSteps = [
  'Client Brief',
  'Planning',
  'Design',
  'Prototyping',
  'Testing',
  'Production',
  'Delivery',
];

const EngineeringDesignWorkflow = [
  'Requirement Gathering',
  'CAD Modelling',
  'Simulation/Analysis',
  'Design Review',
  'Final Drawings'
];

const QualityAssuranceProcess = [
  'Incoming Materials',
  'Inspection',
  'In-Process Checks',
  'Final Product Testing',
];

const ProductDevelopmentPhases = [
  'Sketch',
  'CAD',
  'Prototype (3D printed or CNC)',
  'Tested Product',
];

const ProcessCard = ({ title, steps, icon, color }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      backgroundColor: '#fff',
      borderRadius: 3,
      boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
      p: 4,
      height: '100%',
      borderTop: `4px solid ${color}`,
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box sx={{
          backgroundColor: color,
          color: '#fff',
          borderRadius: '50%',
          width: 50,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mr: 2,
        }}>
          {icon}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ pl: 2 }}>
        {steps.map((step, index) => (
          <Box key={index} sx={{ display: 'flex', mb: 2 }}>
            <Box sx={{
              backgroundColor: color,
              color: '#fff',
              borderRadius: '50%',
              minWidth: 25,
              height: 25,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
              fontSize: '0.8rem',
              fontWeight: 'bold',
            }}>
              {index + 1}
            </Box>
            <Typography variant="body1" sx={{ color: '#424242' }}>
              {step}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            color: '#6724ec',
            position: 'relative',
            display: 'inline-block',
            mb: 3,
            fontSize: isMobile ? '2rem' : '2.5rem',
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

        <Typography variant="h6" gutterBottom sx={{ fontStyle: 'italic', mb: 3 }}>
          We train Engineers who change the world.
        </Typography>

        <Typography
    variant="body1"
    sx={{
      mt: 2,
      lineHeight: 1.8,
      color: 'black',
      textAlign: 'justify',
      fontSize: { xs: '0.95rem', sm: '1rem' },
    }}
  >
    Innovex Engineering 2022 is a diversified group based in Gujarat, India,
    with world-class, fully integrated infrastructure. It is a CE-certified, 100%
    'Make in India' organization focused on multi-engineering disciplines such
    as design, metallurgy, fabrication, machining, infrastructure, and turnkey
    solutions for a variety of business needs.
  </Typography>

  <Typography
    variant="body1"
    sx={{
      mt: 2,
      lineHeight: 1.8,
      color: 'black',
      textAlign: 'justify',
      fontSize: { xs: '0.95rem', sm: '1rem' },
    }}
  >
    Innovex Engineering is backed by six decades of enviable history and a
    reputation for delivering effective, economical, and environmentally efficient
    solutions. The Innovex Engineering brand is known for its uncompromising quality,
    indigenous technology, and innovation through its dedicated service to all its customers.
  </Typography>      
  
  </Box>

      {/* Vision and Mission Section */}
      <Container maxWidth="lg" sx={{ py: isMobile ? 3 : 5 }}>
        <Typography variant="h3" gutterBottom sx={{
          fontWeight: 'bold',
          color: '#6724ec',
          textAlign: 'center',
          mb: isMobile ? 3 : 5,
          fontSize: isMobile ? '1.8rem' : '2.5rem',
        }}>
          Our Vision & Mission
        </Typography>

        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              p: isMobile ? 2 : 4,
              borderRadius: 3,
              boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
              height: '100%',
              borderLeft: '4px solid #13c46e',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{
                  width: isMobile ? 40 : 50,
                  height: isMobile ? 40 : 50,
                  borderRadius: '50%',
                  backgroundColor: '#13c46e',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}>
                  <Typography variant="h5">👁️</Typography>
                </Box>
                <Typography variant="h4" sx={{
                  fontWeight: 'bold',
                  color: '#6724ec',
                  fontSize: isMobile ? '1.3rem' : '2rem',
                }}>
                  Our Vision
                </Typography>
              </Box>
              <Typography variant="body1" sx={{
                lineHeight: 1.8,
                color: '#424242',
                fontSize: isMobile ? '0.9rem' : '1rem',
              }}>
               To be a globally recognized engineering services firm known for 
               innovation, reliability, and client satisfaction,
                setting new benchmarks in engineering excellence.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{
              p: isMobile ? 2 : 4,
              borderRadius: 3,
              boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
              height: '100%',
              borderLeft: '4px solid #00c2ff',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2  }}>
                <Box sx={{
                  width: isMobile ? 40 : 50,
                  height: isMobile ? 40 : 50,
                  borderRadius: '50%',
                  backgroundColor: '#13c481',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}>
                  <Typography variant="h5">🎯</Typography>
                </Box>
                <Typography variant="h4" sx={{
                  fontWeight: 'bold',
                  color: '#6724ec',
                  fontSize: isMobile ? '1.3rem' : '2rem',
                }}>
                  Our Mission
                </Typography>
              </Box>
              <Typography variant="body1" sx={{
                lineHeight: 1.8,
                color: '#424242',
                fontSize: isMobile ? '0.9rem' : '1rem',
              }}>
                To empower industries with cutting-edge engineering solutions 
                that drive progress, enhance operational efficiency, 
                and contribute to a sustainable future. We achieve this 
                through technical expertise, client collaboration, 
                and a commitment to excellence.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Process and Card Section */}
      <Box sx={{
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
        py: 15, 
      }}>
        <Typography variant="h4" gutterBottom sx={{
          fontWeight: 'bold',
          color: '#6724ec',
          textAlign: 'center',
          mb: 5,
        }}>
          Work Process
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ProcessCard 
              title="1. Project Lifecycle Overview" 
              steps={lifecycleSteps} 
              icon={<PeopleIcon sx={{ fontSize: 24 }} />}
              color="#6724ec"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProcessCard 
              title="2. Engineering Design Workflow" 
              steps={EngineeringDesignWorkflow} 
              icon={<DesignServicesIcon sx={{ fontSize: 24 }} />}
              color="#6724ec"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProcessCard 
              title="3. Quality Assurance Process" 
              steps={QualityAssuranceProcess} 
              icon={<GradeIcon sx={{ fontSize: 24 }} />}
              color="#6724ec"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProcessCard 
              title="4. Product Development Phases" 
              steps={ProductDevelopmentPhases} 
              icon={<BuildIcon sx={{ fontSize: 24 }} />}
              color="#6724ec"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
