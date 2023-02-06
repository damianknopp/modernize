import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import ListVets from './pages/ListVets/ListVets';

function App() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Veterinarians
          </Typography>
        </Toolbar>
      </AppBar>
      <ListVets></ListVets>
    </React.Fragment>
  );
}

export default App;
