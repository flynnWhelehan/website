import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Typography, Box, Divider } from '@mui/material';

function About() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Container>
        <Helmet>
          <title>Flynn's about page</title>
          <meta name="All about FW." content="Web site in progress..." />
        </Helmet>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to the about page of FW's website. This website is currently under development.
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h5" component="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our mission is to provide high quality content and services to our users.
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h5" component="h2" gutterBottom>
            Our Team
          </Typography>
          <Typography variant="body1" gutterBottom>
            We have a dedicated team of professionals working hard to deliver the best experience to our users.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default About;