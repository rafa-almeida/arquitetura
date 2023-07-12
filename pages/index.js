import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import index from '../styles/Index.module.css'
import TemplateDefault from '../src/templates/Default'
import { FaPenSquare } from "react-icons/fa";


export default function Home() {
  return (
    <TemplateDefault >
             
     <Container >
        <Container className= {index.main}>
          <video autoPlay loop controls className= {index.main1} >
            <source src = "/video/bg1.mp4" />
          </video>

          <Container className= {index.central} >
            <Box className= {index.boxcentral}>
            
            </Box>
            <Box className= {index.box} >
              <Typography component="h2"
              variant="h3"
              color="inherit"
              align="center"
              className= {index.central1}>
                  Arquitetura, Reformas Residenciais, Reformas Comerciais
              </Typography >
              <p className= {index.central2}>
                Reforme seu apartamento, casa escritório com a gente!
              </p>
              <h6 className= {index.central3}> Na Renovate  você tem  o melhor custo-beneficio em reformas residenciais e reformas comerciais.</h6>
            </Box>

            <Container className= {index.box}>
            <Box className= {index.boxcentral1}>
            
            
              <Typography component="h3"
                variant="h4"
                color="inherit"
                align="center"className= {index.descricao}>
                    Reformamos seu apartamento, casa ou escritório com qualidade premium, trabalhamos com materiais de alta qualidade e móveis planejados 100% MDF e sob medida.
              </Typography>
              <p className= {index.descricao1}>
                Isso mesmo, aqui seu sonho é sob medida! 
              </p>
                
              <Box>
                <h6 className= {index.descricao2}> <FaPenSquare className= {index.pen}/>  Pagamento parcelado em até 10x sem juros no Cartão de Crédito ou *Boleto.</h6>
                <h6 className= {index.descricao3}><FaPenSquare className= {index.pen}/>
                Nas compras acima de 15 Mil ganhe um lindo brinde!</h6>
              </Box>
              </Box>

              <Box>
                <Typography component="h6" variant="h6" align="center"  >
                  Coded by Rafael Almeida
                </Typography>
             </Box>
            </Container> 
            
          </Container> 
          
        </Container>
        
      </Container>   
      
         
     

    </TemplateDefault>
  )
}

