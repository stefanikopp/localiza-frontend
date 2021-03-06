import React, { useState } from 'react';
import { Container, TextField, Divider, Typography, Button } from '@material-ui/core';
import { cadastrarEcommerce } from '../../services';

const styles = {
    container: {
        backgroundColor: '#ddd',
        padding: 20,
        margin: '20px auto',
        width: 600,
        borderRadius: 16
    },
    input: {
        margin: '20px auto'
    },
    botao: {
        margin: '30px auto'
    }
}

function CadastroEcommerce({ voltarPraPedidos }) {

    const [nome, setNome] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [telefone, setTelefone] = useState('')

    async function onClickCadastro() {
        await cadastrarEcommerce({
            nome,
            cep,
            numero,
            telefone
        })
        
        voltarPraPedidos()
    }

    return (
        <Container display={'flex'} style={styles.container}>
            <Typography variant={'h6'} color="primary">
                Cadastrar Ecommerce
            </Typography>
            <Divider />

            <TextField value={nome} onChange={(event) => setNome(event.target.value)} id="standard-basic" label="Nome"  style={styles.input}/><p/>
            <TextField value={cep} onChange={(event) => setCep(event.target.value)} id="standard-basic" label="CEP"  style={styles.input}/><p/>
            <TextField value={numero} onChange={(event) => setNumero(event.target.value)} id="standard-basic" label="Número"  style={styles.input}/><p/>
            <TextField value={telefone} onChange={(event) => setTelefone(event.target.value)} id="standard-basic" label="Telefone"  style={styles.input}/><p/>
        
            <Button onClick={onClickCadastro} style={styles.botao} color="primary">  
                Confirmar 
            </Button>

        </Container>

    );
}

export default CadastroEcommerce;