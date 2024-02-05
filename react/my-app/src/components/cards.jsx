import React, { useState } from 'react';
import './cards.css';

const Products = [
      {
            name: 'iphone',
            price: 20000,
            delivery: 'feb 2'
      },
      {
            name: 'mac',
            price: 200000,
            delivery: 'feb 10'
      }
];

function Card() {

      let initialQuantities = Array(Products.length).fill(0);
      let [quantities, setQuantities] = useState(initialQuantities);

      let incrementQty = (index) => {
            let newQuantities = [...quantities];
            newQuantities[index]++;
            setQuantities(newQuantities);
      };

      let decrementQty = (index) => {
            if (quantities[index] > 0) {
                  let newQuantities = [...quantities];
                  newQuantities[index]--;
                  setQuantities(newQuantities);
            }


      };

      let deleteQty = (index) => {
            let newQuantities = [...quantities];
            newQuantities[index] = 0;
            setQuantities(newQuantities);


      };


      return (
            <div className='container'>
                  {Products.map((product, index) => (
                        <div className="card" key={index}>
                              <h1>{product.name}</h1>
                              <p>Price: {product.price}</p>
                              <p>Delivery: {product.delivery}</p>
                              <div className='qty'>
                                    <button onClick={() => decrementQty(index)}>-</button>
                                    <h1>{quantities[index]}</h1>
                                    <button onClick={() => incrementQty(index)}>+</button>
                                    <button onClick={() => deleteQty(index)}>DEL</button>


                              </div>
                        </div>
                  ))}
            </div>
      );
}

export default Card;
