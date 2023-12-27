import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    let{id,count,code,category,price,onSale} = this.props.productdetails;
    return (
      <div className='col-md-3'>
        <div className='bg-white position-relative p-3 text-center'>
        {/* <h4>id:{id}</h4> */}
        <h2>Count: {count}</h2>
        <h5>Code: {code}</h5>
        <h4>Category: {category}</h4>
        <h4>Price: {price}</h4>
        {onSale?<div className='bg-danger p-1 text-white top-0 end-0 position-absolute'>Sale</div>:``}
        <button onClick={ ()=> this.props.delete(id) } className='btn btn-outline-danger btn-sm w-100'>Delete</button>
        <button onClick={()=>this.props.update(this.props.productIndex, 1 ) } className='btn btn-outline-success btn-sm w-100 mt-1'>+</button>
        <button onClick={()=>this.props.update(this.props.productIndex, -1 ) } className='btn btn-outline-success btn-sm w-100 mt-1'>-</button>



        </div>
        
      </div>
    )
  }
}
