import * as React from 'react';
import { FaHome } from "react-icons/fa";
import styles from '../../styles/Header.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function ButtonAppBar() {
 
  return(
    <div className= {styles.nav}>
      <AnchorLink href='#home' >Home</AnchorLink>
      <AnchorLink href='#arquitetura' >Arquitetura</AnchorLink>
      <div>
        <h3 className= {styles.fa}> <FaHome /> Renovate</h3> 
        <h5>Reforma Inteligente</h5>
      </div>
      <AnchorLink href='#serviços' >Serviços</AnchorLink>
      <AnchorLink href='#comentarios' >Comentários</AnchorLink>
      <AnchorLink href='#contatos' >Contatos</AnchorLink>
    </div>
    
  );
 }
