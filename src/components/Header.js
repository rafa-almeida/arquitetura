import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FaHome } from "react-icons/fa";
import styles from '../../styles/Header.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { render } from 'react-dom';


export default function ButtonAppBar() {
 
  return(
    <div className= {styles.nav}>
      <AnchorLink href='#home' >Home</AnchorLink>
      <AnchorLink href='#arquitetura' >Arquitetura</AnchorLink>
      <AnchorLink href='#serviços' >Serviços</AnchorLink>
      <AnchorLink href='#comentarios' >Comentários</AnchorLink>
    </div>
    
  );
 }
