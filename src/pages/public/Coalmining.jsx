import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import rod1 from '../../assets/images/project/p1.jpg'; // Background image

const placeholderImg = "https://via.placeholder.com/400x250.png?text=Project+Image";

const projects = [
  {
    title: 'Gorakhpur Link Expressway',
    image: placeholderImg,
    cost: '₹ 12,500 mn',
    state: 'Uttar Pradesh',
    year: 'FY2024',
  },
  {
    title: 'Guna – Biora',
    image: placeholderImg,
    cost: '₹ 10,129 mn',
    state: 'Madhya Pradesh',
    year: 'FY2018',
  },
  {
    title: 'Ghaghra Bridge – Varanasi',
    image: placeholderImg,
    cost: '₹ 6,734.40 mn',
    state: 'Uttar Pradesh',
    year: 'FY2019',
  },
];

const Coalmining = () => {
  return (
    <>
      {/* Background Header */}
      <Box
        sx={{
          height: '400px',
          backgroundImage: `url(${rod1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          color="white"
          fontWeight="bold"
          sx={{ backgroundColor: 'rgba(0,0,0,0.4)', p: 2, borderRadius: 2 }}
        >
          Coalmining......
        </Typography>
      </Box>

      {/* Project Cards */}
      <Box px={{ xs: 2, sm: 4 }} py={5}>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {project.title}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={2} mb={1}>
                    <Typography>{project.cost}</Typography>
                    <LocationOnIcon sx={{ fontSize: 18, color: '#666' }} />
                    <Typography>{project.state}</Typography>
                  </Box>
                  <Box display="flex" gap={2} mb={2}>
                    <Typography>EPC</Typography>
                    <Typography>Completed</Typography>
                    <Typography>{project.year}</Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ textTransform: 'none' }}
                  >
                    View More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Coalmining;
