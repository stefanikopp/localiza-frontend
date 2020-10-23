import React, { useState } from 'react';
import Home from './pages/Home';
import CadastroEcommerce from './pages/CadastroEcommerce'
import { Button, Divider, Typography, Box } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const styles = {
  container: {
    backgroundColor: '#ddd',
    padding: 20,
    margin: '20px auto',
    width: 600,
    borderRadius: 16
},
  botao: {
    marginRight: 200,
  },
  t: {
    marginLeft: 15
  }
}

function App() {
  const [showCadastro, toggleCadastro] = useState(false)

  return (
    <div  style={styles.container}>
      <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} style={{ marginBottom: 20 }}>
        <Typography style={styles.t} variant={'h6'} color="primary">
          Cadastrar Ecommerce 
        </Typography>

        <Button style={styles.botao} onClick={() => toggleCadastro(!showCadastro)} color="primary">
          { showCadastro ? 'Pedidos' : ' Cadastrar' }  
          <ArrowForwardIosIcon/>      
        </Button>
      </Box>

      <Divider />

      {
        showCadastro ?
          <CadastroEcommerce voltarPraPedidos={() => toggleCadastro(false)} />
        :
         <Home />
      }
    </ div>
  );
}

export default App; 
