import React, { Component } from 'react'
import Child from '../Child/Child'


export default class Parent extends Component {
    state = {
        products:[
            {id:10,count:10,code:`Samsung s22`,category:`mobile`,price:20000,onSale:true},
            {id:15,count:20,code:`Iphone 15`,category:`mobile`,price:40000,onSale:false},
            {id:8,count:30,code:`tecno`,category:`mobile`,price:7000,onSale:false},
            {id:4,count:40,code:`dell`,category:`labtop`,price:25000,onSale:true},
            {id:17,count:50,code:`toshiba`,category:`tv`,price:8000,onSale:true},
            {id:1057,count:60,code:`Nokia`,category:`mobile`,price:6000,onSale:false},
            {id:7,count:70,code:`xiaomi`,category:`mobile`,price:11000,onSale:true},
            {id:200,count:80,code:`lenovo`,category:`mobile`,price:5000,onSale:true},
            {id:9,count:90,code:`lg`,category:`tv`,price:8000,onSale:false},
            {id:18,count:100,code:`carrier`,category:`aircondion`,price:40000,onSale:true},
            {id:22,count:110,code:`Samsung s22`,category:`mobile`,price:20000,onSale:true},
            {id:30,count:120,code:`Iphone 15`,category:`mobile`,price:40000,onSale:false},

        ]
        // user:{FullName:`MahMoud MaHer`,age:26, gender:`Male`}
    }
    updateProduct = (productIndex,step)=>
    {
        let products = [...this.state.products];
        products[productIndex].count=products[productIndex].count+step;
        this.setState({products});

    }
    deleteProduct =(productId)=>
    {
        // deep copy
        let products = [...this.state.products];
        //update copy //filter
        products = products.filter((prod)=>prod.id !== productId)
        //setStat()
        this.setState({products});


    }
  render() {
    return (
      <>
      <div className='container'>
        <div className='bg-dark p-4'>
            <div className='row gy-4'>
            {this.state.products.map((x,index)=> <Child productIndex={index} key={x.id} productdetails={x} delete={this.deleteProduct} update ={this.updateProduct}></Child>)}
            </div>
            
        </div>
      </div>
      </>
    )
  }
}
