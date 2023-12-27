import React, { Component } from 'react'

export default class Home extends Component {
  // binding
    state={
        productName:`Samsung n8`,
        productPrice:9000,
        darkstyle:`bg-dark text-white text-center`,
        userName:`MahMoud MaHer`
    }
    welcome(){
      return `welcome ${this.state.userName}`
    }
  render() {
    return (
      <>
      <h1 className={this.state.darkstyle}>product Code : {this.state.productName}</h1>
      <h1>product price : {this.state.productPrice}</h1>
      <h3 className='bg-danger text-center'>{this.welcome()}</h3>
      <h2>Hello From Home</h2>
      </>
    )
  }
}
