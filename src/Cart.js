import React, { Component } from 'react';
import formatCurrency from './components/Util';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"",
            email:"",
            address:"",
            showCheckOut: false
         }
    }
    handleInpit=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    createOrder=(e)=>{
        e.priventDefault();
        const order={
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            cartItems:this.props.cartItems
        };
        this.props.createOrder(order);
    }
    render() {
        const { cartItems } = this.props;
        return (

            <div>
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">Cart is Empty</div>
                ) : (

                    <div className="cart cart-header">Cart have {cartItems.length} item is Empty</div>
                )}
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map((item) => (
                                <li key={cartItems.id}>
                                    <div>
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                    <div>{item.description}</div>
                                    <div className="right">
                                        {item.count}  x {formatCurrency(item.price)}{" "}
                                        <button className="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>

                    {cartItems.length !== 0 && (
                        <div>
                            <div>
                                <div className="total">
                                    Total{" "}
                                    {formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
                                </div>
                                <button
                                    onClick={() => {
                                        this.setState({ showCheckOut: true })
                                    }}
                                    className="button primary">Proceed</button>
                            </div>
                            {this.state.showCheckOut && (
                                <div className="cart">
                                    <form onSubmit={this.createOrder}>
                                        <ul className="form-container">
                                            <li>
                                                <lable>Name:</lable>
                                                <input type="text" name="name" required onChange={this.handleInpit} />
                                            </li>
                                            <li>
                                                <lable>Email:</lable>
                                                <input type="email" name="email" required onChange={this.handleInpit} />
                                            </li>
                                            <li>
                                                <lable>Address:</lable>
                                                <input type="text" name="address" required onChange={this.handleInpit} />
                                            </li>
                                            <li>
                                                <button className="button primary" type="submit"> CheckOut</button>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>
        );
    }
}

export default Cart;