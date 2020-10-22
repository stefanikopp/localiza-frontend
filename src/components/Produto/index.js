import React from 'react';
import { Container, Typography } from '@material-ui/core';


const styles = {
    container: {
        margin: '10px 0'
    }
}

const Produto = ({ produto }) => {
    return (
        <Container style={styles.container}>

            <Typography>
                Nome: {produto.nome}
            </Typography>

            <Typography>
                Valor: {produto.valor}
            </Typography>

            <Typography>
                Quantidade: {produto.pedidos_produtos.quantidade}
            </Typography>

        </Container >
    );

}

export default Produto;

