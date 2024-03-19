import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ImagemMaldita from './topo.png'

const pages = ['HOME', 'CATALOGO', 'CONTROLE', 'USUARIOS'];

function ResponsiveAppBar() {
    const [activeTab, setActiveTab] = useState(pages[0]);
  

    const buttonStyle = (page, index) => ({
      flexGrow: 1,
      color: 'white',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontWeight: 'bold',
      backgroundColor: activeTab === page ? '#335872' : 'transparent',
      borderRadius: 0,
      padding: 20,
      zIndex: 10
    });
  
    return (
        <>
          <Box
            component="img"
            src={ImagemMaldita}
            sx={{
              width: '100%', 
              display: 'block', 
            }}
          />
          <AppBar position="static" style={{ background: '#447598', boxShadow: 'none' }}>
            <Container maxWidth="xl" disableGutters>
              <Toolbar disableGutters style={{ padding: 0 }}>
                <Box sx={{ flexGrow: 1, display: 'flex' }}>
                  {pages.map((page, index) => (
                    <Button
                      key={page}
                      onClick={() => setActiveTab(page)}
                      style={buttonStyle(page, index)}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </>
      );
    }
    
    export default ResponsiveAppBar;