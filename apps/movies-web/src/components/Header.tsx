import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import AddMovieForm from './AddMovieForm';

// Todo: Add darkmode toggle
const Header: React.FC = () => {
  const [addMovieOpen, setAddMovieOpen] = React.useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Movies
        </Typography>
        <IconButton
          onClick={() => setAddMovieOpen(true)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="add-movie"
          sx={{ mr: 2 }}
        >
          <AddBoxIcon />
        </IconButton>
        <AddMovieForm
          open={addMovieOpen}
          onClose={() => setAddMovieOpen(false)}
        />
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
