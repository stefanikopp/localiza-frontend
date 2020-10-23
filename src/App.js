import React, { useState } from 'react';
import Home from './pages/Home';
import CadastroEcommerce from './pages/CadastroEcommerce'
import { Button, Divider, Typography, Container, Box } from '@material-ui/core';

const styles = {
  container: {
    backgroundColor: '#ddd',
    padding: 20,
    margin: '20px auto',
    width: 600,
    borderRadius: 16
},
  botao: {
    backgroundColor: '#CDC9C9',
    marginRight: 10,
  }
}

function App() {
  const [showCadastro, toggleCadastro] = useState(false)

  return (
    <div  style={styles.container}>
      <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} style={{ marginBottom: 10 }}>
        <Typography variant={'h6'} color="primary">
          Cadastrar Ecommerce
        </Typography>

        <Button style={styles.botao} color="primary" onClick={() => toggleCadastro(!showCadastro)} color="primary">
          { showCadastro ? 'Pedidos' : ' Cadastrar' }        
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
