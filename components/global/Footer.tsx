import React from 'react';
import { Container, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#424242', color: '#fff', padding: '16px 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Product Hub
        </Typography>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px' }}>
          <Link href="#" color="inherit">Home</Link>
          <Link href="#" color="inherit">About</Link>
          <Link href="#" color="inherit">Products</Link>
          <Link href="#" color="inherit">Contact</Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
          <IconButton href="#" color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton href="#" color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton href="#" color="inherit">
            <InstagramIcon />
          </IconButton>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
