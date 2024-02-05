import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import FooterStyle from './styles/Footer.css';

function Footer() {
  return (
    <AppBar position="static" className="footer" style={{ background: '#878787' }}>
      <Container>
        <Toolbar>
          <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
            © 2024 FW Technology
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;