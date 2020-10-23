import React from 'react';
import { Container, Typography, Divider} from '@material-ui/core';
import Cliente from "../Cliente";
import Ecommerce from "../Ecommerce";
import Produto from '../Produto';


const styles = {
    container: {
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        margin: '10px 0'
    },
    produtos: {
        border: '1px solid black ',
        borderRadius: 6
    }
}

const Pedido = ({ item }) => {
    return (
        <Container style={styles.container}>

            <Cliente  cliente={item.cliente} />

            <Ecommerce ecommerce={item.ecommerce} />

            <Container style={styles.produtos}>

            <Typography variant={'subtitle2'}>
               Produtos
            </Typography> 

            <Divider />
            {
                item.produtos.map((produto, index) => (
                    <Produto key={index} produto={produto} /> 
                ))
            }
            </Container>

            <Typography>
                Status: {item.status}
            </Typography>

            <Typography>
                Valor Total: {item.valor_total}
            </Typography>

        </Container >
    );

}

export default Pedido;

