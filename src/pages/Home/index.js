import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { Typography, Divider, TextField, IconButton, MenuItem, Select, FormControl, InputLabel} from '@material-ui/core';
import { buscarPedidos, buscarPedidosPorEcommerce, buscarPedidosPorStatus } from '../../services'
import Pedido from '../../components/Pedido';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    container: {
        backgroundColor: '#ddd',
        padding: 20,
        margin: '20px auto',
        width: 600,
        borderRadius: 16
    },
    pesquisa: {
        borderRadius: 6,
        margin: '20px auto',
        width: 600
    },
    input: {
        margin: '20px auto'
    },
    botao: {
        margin: '30px auto'
    },
    select: {
        margin: '20px auto'
    }
}

function Home() {
    const [pedidos, setPedidos] = useState([])
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('Todos')

    useEffect(() => {
        async function listarPedidos() {
           const response = await buscarPedidos() 
           setPedidos(response)    
        }
        listarPedidos()
    }, [])

    async function handleChangeStatus(event) {
        const response = await buscarPedidosPorStatus(event.target.value) 
        setPedidos(response) 
        setStatus(event.target.value)
    }

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    async function onSearch() {
        const response = await buscarPedidosPorEcommerce(search) 
        setPedidos(response) 
    }

    return (
        <Container display={'flex'} style={styles.container}>
            <div style={styles.pesquisa}>
                <Typography variant={'h6'} color="primary">
                    Pesquisar Pedidos
                </Typography>
                <Divider />

                <TextField value={search} onChange={handleSearch} id="standard-basic" label="Ecommerce"  style={styles.input}/>

                <IconButton onClick={onSearch} style={styles.botao} color="primary">
                    <SearchIcon />
                </IconButton>
                
                <FormControl style={styles.select}>
                    <InputLabel>Status</InputLabel>
                    <Select value={status} onChange={handleChangeStatus} label={'Status'}>
                        <MenuItem value={'Todos'}>Todos</MenuItem>
                        <MenuItem value={'Em Rota'}>em rota</MenuItem>
                        <MenuItem value={'Entregue'}>entregue</MenuItem>
                        <MenuItem value={'Despachado'}>despachado</MenuItem>
                    </Select>
                </FormControl>     
            </div>

            <Typography variant={'h6'} color="primary">
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
