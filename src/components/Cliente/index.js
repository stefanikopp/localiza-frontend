import React from 'react';
import { Typography, Container } from '@material-ui/core';

const styles = {
    container: {
        padding: 3,
        borderRadius: 6,
        border: '1px solid black'
    }
}

function Cliente( {cliente} ) {
    return(
        <Container style={styles.container}>
            <Typography>
                Nome : {cliente.nome}
            </Typography>

            <Typography>
                CPF : {cliente.cpf}
            </Typography>

            <Typography>
                Endereço : {cliente.endereco}
            </Typography>
           
        </Container>
    );
}

export default Cliente;