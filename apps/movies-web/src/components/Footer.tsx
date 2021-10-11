import { Grid, Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Grid item xs={12} style={{ textAlign: 'center' }}>
      <Typography variant="body2">
        Movies Web App © {new Date().getFullYear()}
      </Typography>
    </Grid>
  );
};

export default Footer;
