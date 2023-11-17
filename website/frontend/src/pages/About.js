import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Typography, Box, Paper } from '@mui/material';
import { aboutContent, missionContent } from '../content/about/AboutContent';


function About() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="21vh"
      alignItems="center"
      justifyContent="center"
    >
      <Container>
        <Helmet>
          <title>About</title>
          <meta name="All about FW Project." content={aboutContent.intro} />
        </Helmet>
        <h1 className="title">About</h1>
        <Box mb={2}>
          <Paper elevation={3} style={{ padding: '12px' }}>
            <Typography variant="body1" gutterBottom>
              {aboutContent.about}
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default About;