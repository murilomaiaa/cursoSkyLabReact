import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css'

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
    const { products } = this.state.products
    return (
      <div className="product-list">
        {this.state.products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <a href="#">Acessar</a>
          </article>
          ))}
      </div>
    )
  }
}
