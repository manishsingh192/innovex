import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Typography,
    Grid,
    TextField,
    Button,
    useTheme,
    Paper,
    Container
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UploadIcon from '@mui/icons-material/Upload';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import f1 from '../../assets/form/frm.jpg';
const ApplyForm = () => {
    const [cvName, setCvName] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedName, setSelectedName] = useState('');
    const dropdownRef = useRef(null);
    const theme = useTheme();

    const names = ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'UI/UX Designer'];

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            jobType: '',
            cv: null,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            phone: Yup.string().required('Phone number is required'),
            jobType: Yup.string().required('Job type is required'),
            cv: Yup.mixed().required('CV is required'),
        }),
        onSubmit: (values, { resetForm, setSubmitting }) => {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('phone', values.phone);
            formData.append('jobType', values.jobType);
            formData.append('cv', values.cv);

            console.log('Form submitted:', values);
            
            // Simulate API call
            setTimeout(() => {
                resetForm();
                setCvName('');
                setSelectedName('');
                setSubmitting(false);
            }, 1500);
        },
    });

    const textFieldStyles = {
        '& .MuiInputBase-root': { 
            padding: '10px', 
            borderRadius: '8px',
            backgroundColor: theme.palette.background.paper
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': { 
                border: `2px solid ${theme.palette.divider}`,
                transition: 'border-color 0.3s ease'
            },
            '&:hover fieldset': { 
                borderColor: theme.palette.primary.main 
            },
            '&.Mui-focused fieldset': { 
                borderColor: theme.palette.primary.main,
                boxShadow: `0 0 0 2px ${theme.palette.primary.light}`
            },
        },
        '& .MuiFormLabel-root': { 
            fontSize: '0.9rem',
            color: theme.palette.text.secondary
        },
        '& .MuiInputBase-input': {
            fontSize: '0.95rem'
        }
    };

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSelect = (name) => {
        setSelectedName(name);
        setIsOpen(false);
        formik.setFieldValue('jobType', name);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const jobTypeError = formik.touched.jobType && Boolean(formik.errors.jobType);

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ 
                borderRadius: '16px', 
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' },
                    minHeight: '100%'
                }}>
                    {/* Image Section */}
                    <Box sx={{
                        flex: 1,
                        minHeight: { xs: '200px', md: 'auto' },
                        backgroundImage: `url(${f1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))'
                        }
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            p: 3,
                            color: 'white'
                        }}>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Join Our Team
                            </Typography>
                            <Typography variant="body1">
                                We're looking for talented individuals to help us build the future.
                            </Typography>
                        </Box>
                    </Box>
                    
                    {/* Form Section */}
                    <Box sx={{ 
                        flex: 1, 
                        p: { xs: 3, sm: 4 },
                        backgroundColor: theme.palette.background.default
                    }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                            Apply for a Position
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={formik.handleSubmit}
                            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Full Name"
                                        fullWidth
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                        sx={textFieldStyles}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Email Address"
                                        fullWidth
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        sx={textFieldStyles}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Phone Number"
                                        fullWidth
                                        type="tel"
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        helperText={formik.touched.phone && formik.errors.phone}
                                        sx={textFieldStyles}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div ref={dropdownRef} style={{ position: 'relative' }}>
                                        <div
                                            onClick={handleToggle}
                                            style={{
                                                padding: '15px',
                                                border: `2px solid ${jobTypeError ? theme.palette.error.main : theme.palette.divider}`,
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                backgroundColor: theme.palette.background.paper,
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    borderColor: theme.palette.primary.main
                                                }
                                            }}
                                        >
                                            <span style={{ 
                                                color: formik.values.jobType ? theme.palette.text.primary : theme.palette.text.secondary 
                                            }}>
                                                {formik.values.jobType || 'Select Job Type'}
                                            </span>
                                            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>

                                        {isOpen && (
                                            <ul
                                                style={{
                                                    listStyleType: 'none',
                                                    margin: 0,
                                                    padding: 0,
                                                    position: 'absolute',
                                                    top: '52px',
                                                    left: 0,
                                                    width: '100%',
                                                    border: `1px solid ${theme.palette.divider}`,
                                                    borderRadius: '8px',
                                                    backgroundColor: theme.palette.background.paper,
                                                    boxShadow: theme.shadows[3],
                                                    zIndex: 10,
                                                    maxHeight: '200px',
                                                    overflowY: 'auto',
                                                }}
                                            >
                                                {names.map((name) => (
                                                    <li
                                                        key={name}
                                                        onClick={() => handleSelect(name)}
                                                        style={{
                                                            padding: '12px 16px',
                                                            cursor: 'pointer',
                                                            backgroundColor: theme.palette.background.paper,
                                                            borderBottom: `1px solid ${theme.palette.divider}`,
                                                            transition: 'all 0.2s ease',
                                                            '&:hover': {
                                                                backgroundColor: theme.palette.action.hover
                                                            },
                                                            '&:last-child': {
                                                                borderBottom: 'none'
                                                            }
                                                        }}
                                                    >
                                                        {name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {jobTypeError && (
                                            <Typography variant="body2" color="error" sx={{ mt: 1, ml: 1 }}>
                                                {formik.errors.jobType}
                                            </Typography>
                                        )}
                                    </div>
                                </Grid>
                            </Grid>

                            <Box sx={{ mt: 1 }}>
                                <Button
                                    variant="outlined"
                                    component="label"
                                    fullWidth
                                    startIcon={<UploadIcon />}
                                    sx={{
                                        py: 1.5,
                                        borderRadius: '8px',
                                        borderStyle: 'dashed',
                                        borderWidth: '2px',
                                        borderColor: formik.errors.cv && formik.touched.cv ? theme.palette.error.main : theme.palette.divider,
                                        backgroundColor: theme.palette.background.paper,
                                        textTransform: 'none',
                                        '&:hover': {
                                            borderColor: theme.palette.primary.main,
                                            backgroundColor: theme.palette.action.hover
                                        }
                                    }}
                                >
                                    Upload CV (PDF only)
                                    <input
                                        type="file"
                                        hidden
                                        name="cv"
                                        accept=".pdf"
                                        onChange={(event) => {
                                            const file = event.currentTarget.files[0];
                                            formik.setFieldValue('cv', file);
                                            setCvName(file?.name || '');
                                        }}
                                    />
                                </Button>

                                {cvName && (
                                    <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}>
                                        Selected: {cvName}
                                    </Typography>
                                )}
                                {formik.errors.cv && formik.touched.cv && (
                                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                                        {formik.errors.cv}
                                    </Typography>
                                )}
                            </Box>

                            <Button 
                                type="submit" 
                                variant="contained" 
                                size="large" 
                                sx={{ 
                                    mt: 3,
                                    py: 1.5,
                                    borderRadius: '8px',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: theme.shadows[2],
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.2s ease'
                                }}
                                disabled={formik.isSubmitting}
                            >
                                {formik.isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default ApplyForm;