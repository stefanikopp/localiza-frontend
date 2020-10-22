import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { Typography, Divider } from '@material-ui/core';
import { buscarPedidos } from '../../services'
import Pedido from '../../components/Pedido';


const styles = {
    container: {
        backgroundColor: '#ddd',
        padding: 20,
        margin: '20px auto',
        width: 600,
        borderRadius: 16
    }
}

function Home() {
    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        async function listarPedidos() {
           const response = await buscarPedidos() 
           setPedidos(response)    
        }
        listarPedidos()
    }, [])

    
    console.warn(pedidos);

    return (
        <Container display={'flex'} style={styles.container}>

            <Typography variant={'h5'}>
                Pedidos
           </Typography>

            <Divider />

            {
                pedidos.map((pedido, index) => (
                    <Pedido key={index} item={pedido} />
                ))
            }

        </Container>
    );

}

export default Home;
