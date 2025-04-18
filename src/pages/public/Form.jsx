import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Box,
  Typography,
  Button,
} from '@mui/material';

import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';

const Form = () => {
  const [formData, setFormData] = useState({

    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (you can expand this)
    if (!formData.firstName || !formData.email || !formData.message) {
      alert('Please fill all required fields!');
      return;
    }

    // Log data or send to API
    console.log('Form Submitted:', formData);

    // Reset form (optional)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });

    alert('Thanks! Your message has been sent. ✅');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate 
    autoComplete="off" >
      <Grid container spacing={3}>
        {/* First Name */}
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" gap={1} mb={0.5}>
            <PersonRoundedIcon color="primary" />
            <Typography variant="subtitle2">First Name</Typography>
          </Box>
          <TextField
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            fullWidth
            required
            variant="outlined"
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" gap={1} mb={0.5}>
            <PersonRoundedIcon color="primary" />
            <Typography variant="subtitle2">Last Name</Typography>
          </Box>
          <TextField
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            fullWidth
            variant="outlined"
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" gap={1} mb={0.5}>
            <EmailRoundedIcon color="primary" />
            <Typography variant="subtitle2">Email</Typography>
          </Box>
          <TextField
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            fullWidth
            required
            variant="outlined"
            type="email"
          />
        </Grid>

        {/* Phone */}
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" gap={1} mb={0.5}>
            <PhoneIphoneRoundedIcon color="primary" />
            <Typography variant="subtitle2">Phone Number</Typography>
          </Box>
          <TextField
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            fullWidth
            variant="outlined"
            type="tel"
          />
        </Grid>

        {/* Message */}
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" gap={1} mb={0.5}>
            <MessageRoundedIcon color="primary" />
            <Typography variant="subtitle2">Message</Typography>
          </Box>
          <TextField
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            fullWidth
            required
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2, px: 5 ,backgroundColor:'#13c46e'}}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(Form);
