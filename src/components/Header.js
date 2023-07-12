import * as React from 'react';
import { FaHome } from "react-icons/fa";
import styles from '../../styles/Header.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Typography } from '@material-ui/core';


export default function ButtonAppBar() {
 
  return(
    <div className= {styles.nav}>
      <AnchorLink href='../pages/index.js' >Home</AnchorLink>
      <AnchorLink href='#arquitetura' >Arquitetura</AnchorLink>
      <Typography className={styles.fa}>
        <h4> <FaHome /> Renovate</h4> 
        <h6>Reforma Inteligente</h6>
      </Typography>
      <AnchorLink href='#serviços' >Serviços</AnchorLink>
      <AnchorLink href='#comentarios' >Comentários</AnchorLink>
      <AnchorLink href='#contatos' >Contatos</AnchorLink>
    </div>
    
  );
 }
