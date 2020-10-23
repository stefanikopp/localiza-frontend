import React, { useEffect, useMemo, useState } from 'react';
import Container from '@material-ui/core/Container';
import { Typography, Divider, TextField, IconButton, MenuItem, Select, FormControl, InputLabel, Button} from '@material-ui/core';
import { buscarPedidos, buscarPedidosPorEcommerce, buscarPedidosPorStatus } from '../../services'
import Pedido from '../../components/Pedido';
import SearchIcon from '@material-ui/icons/Search';

import { PDFDownloadLink, Text, View, Document, Page } from '@react-pdf/renderer'
import { Assessment } from '@material-ui/icons';

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
    },
    relatorio: {
        marginBottom: 20,
        marginHorizontal: 10
    },
    itemRelatorio: {
        margin: '10px 0'
    },
    produtoRelatorio: {
        margin: '5px 0'
    },
    relatorioWrapper: {
        
    }
}

const Relatorio = ({ pedidos }) => {

    if (pedidos && pedidos.length) {
        return (
            <Document>
              <Page>
                  {
                    pedidos.map((pedido, index) => (
                        <View key={index} style={styles.relatorio}>
                            <View style={styles.itemRelatorio}>
                                <Text>Nome: {pedido.cliente.nome}</Text>
                                <Text>CPF: {pedido.cliente.cpf}</Text>
                                <Text>Endereço: {pedido.cliente.endereco}</Text>
                            </View>
                            <View style={styles.itemRelatorio}>
                                <Text>Nome: {pedido.ecommerce.nome}</Text>
                                <Text>Endereço: {pedido.ecommerce.endereco}</Text>
                                <Text>Telefone: {pedido.ecommerce.telefone}</Text>
                            </View>
                            <View style={styles.itemRelatorio}>
                                <Text>Produtos</Text>
                                <View>
                                    {
                                        pedido.produtos.map((produto, index) => (
                                            <View style={styles.produtoRelatorio} key={index}>
                                                <Text>Nome: {produto.nome}</Text>
                                                <Text>Valor: R${produto.valor}</Text>
                                                <Text>Quantidade: {produto.quantidade}</Text>
                                            </View>
                                        ))
                                    }
                                </View>
                            </View>
                            <View style={styles.itemRelatorio}>
                                <Text>Status: {pedido.status}</Text>
                                <Text>Valor Total: {pedido.valor_total}</Text>                    
                            </View>
                        </View>
                    ))
                  }        
              </Page>
            </Document>
        )
    }

    return <Document />
}

const DownloadPdf = (props) => {
    return useMemo(
      () => (
        <PDFDownloadLink document={<Relatorio pedidos={props.pedidos} />} fileName="relatorio.pdf" key={Math.random()}>
            {({ blob, url, loading, error }) => (
                <Button color="primary" style={{ textDecoration: 'none' }}>
                    Relatório
                    <Assessment />
                </Button>
            )}
        </PDFDownloadLink>
      ),
      [props],
    )
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
                pedidos && pedidos.length > 0 && pedidos.map((pedido, index) => (
                    <Pedido key={index} item={pedido} />
                ))
            }
            
            <DownloadPdf pedidos={pedidos} />

        </Container>
    );

}

export default Home;
