import React, { Component } from 'react'
import api from '../../services/api'

export default class Main extends Component {
  // metodo render pode precisar de usar
  // algum atributo de estado
  state = {
    products: [],
  }

  // excecutado assim que o componente e
  // montado
  componentDidMount(){
    this.loadProducts()
  }
  
  loadProducts = async() => {
    const response = await api.get('/products')

    this.setState({
      products: response.data.docs
    })
  }

  render(){
    return (
      <div className="product-list">
        <ul>
          {this.state.products.map(product => (
            <li key={product._id}>{product.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}