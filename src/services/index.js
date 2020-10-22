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