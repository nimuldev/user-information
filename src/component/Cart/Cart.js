import React from 'react';

const Cart = (props) => {
   
    const cart=props.cart;
  var  totalPrice=0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        totalPrice = totalPrice + user.salary;

    } 
    return (
        <div>
     
           <h3>Total Add : {cart.length}</h3>
    <p>Total Salary : {totalPrice} $</p>   
        </div>
    );
};

export default Cart;