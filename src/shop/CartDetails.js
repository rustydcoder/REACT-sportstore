import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { CartDetailsRows } from './CartDetailsRows';

const CartDetailsRows = props => {
   const { cart, cartPrice, removeFromCart, handleChange } = props

   if (!cart || cart.length === 0) {
      return <tr>
         <td colSpan='5'>Your cart is empty</td>
      </tr>
   } else {

      return <Fragment>
         {cart.map(item =>
            <tr key={item.product.id}>
               <td>
                  <input type='number' value={item.quantity} onChange={(ev) => handleChange(item.product, ev)} />
               </td>
               <td> {item.product.name} </td>
               <td> ${item.product.price.toFixed(2)} </td>
               <td> ${(item.quantity * item.product.price).toFixed(2)} </td>
               <td>
                  <button className='btn btn-sm btn-danger' onClick={removeFromCart(item.product)}>
                     Remove
                  </button>
               </td>
            </tr>
         )}

         <tr>
            <th colSpan='3' className='text-right'>Total:</th>
            <th colSpan='2'> ${cartPrice.toFixed(2)} </th>
         </tr>
      </Fragment>

   }
}

export class CartDetails extends Component {
   handleChange = (product, event) => {
      this.props.updateCartQuantity(product, event.target.value);
   }

   getLinkClasses = () => `btn btn-secondary m-1
    ${this.props.cartItems === 0 ? 'disabled' : ''}`;

   render = () =>
      <div className='m-3'>
         <h2 className='text-center'>Your Cart</h2>

         <table className='table table-bordered table-striped'>

            <thead>
               <tr>
                  <th>Quantity</th>
                  <th>Product</th>
                  <th className='text-right'>Price</th>
                  <th className='text-right'>Subtotal</th>
                  <th />
               </tr>
            </thead>

            <tbody>
               <CartDetailsRows
                  cart={this.props.cart}
                  cartPrice={this.props.cartPrice}
                  updateQuantity={this.props.updateCartQuantity}
                  removeFromCart={this.props.removeFromCart}
                  handleChange={this.handleChange}
               />
            </tbody>

         </table>

         <div className='text-center'>
            <Link className='btn btn-primary m-1' to='/shop'>
               Continue Shopping
            </Link>
            <Link className={this.getLinkClasses()} to='/shop/checkout'>
               Checkout
            </Link>
         </div>
      </div>
}