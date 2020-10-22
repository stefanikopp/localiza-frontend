import React from 'react';
import { Typography, Container } from '@material-ui/core';

const styles = {
    container: {
        padding: 3,
        borderRadius: 6,
        border: '1px solid black',
        margin: '5px 0'
    }
}

function Ecommerce( {ecommerce} ) {
    return(
        <Container style={styles.container}>
            <Typography>
                Nome: {ecommerce.nome}
            </Typography>

            <Typography>
                Endereço: {ecommerce.endereco}
            </Typography>

            <Typography>
                Telefone: {ecommerce.telefone}
            </Typography>

        </Container>
    );
}

export default Ecommerce;