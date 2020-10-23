import axios from 'axios'


const api = 
    axios.create({ baseURL: 'http://localhost:4000'})

export async function buscarPedidos() {
    try {
        const response = await api.get('/pedidos')
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export async function buscarPedidosPorEcommerce(search) {
    let response = []

    if (search.length <= 0) {
        response = await buscarPedidos()
        return response
    }

    try {
        response = await api.get('/pedidos/ecommerce/'+search)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export async function buscarPedidosPorStatus(status) {
    let response = []

    if (status === "Todos") {
        response = await buscarPedidos()
        return response
    }

    try {
        response = await api.get('/pedidos/'+status)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}