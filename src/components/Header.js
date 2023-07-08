import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FaHome } from "react-icons/fa";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Arquitetura</Button>
          <Button color="inherit">Serviços</Button>
          <h1><FaHome/> </h1>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Renovate
          </Typography>
          <Button color="inherit">Comentários</Button>
          <Button color="inherit">Contatos</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}