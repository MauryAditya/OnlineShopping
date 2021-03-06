import React, { Component } from 'react';
import formatCurrency from './Util';


class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.Products.map(product=> (
                        <li key={product.id}>
                            <div className="product">
                            <a href= {product.id}>
                            <img src={product.image} alt={product.title} ></img>
                            <p>
                                {product.title}
                            </p>
                            </a>

                            <div className="product-price">
                                <div>
                                {formatCurrency(product.price)}
                                </div> 
                            
                            <button onClick={()=> this.props.addToCart(product)} className="button primary">Add to Cart</button>
                            </div>
                            </div>
                        </li>
                    ) )}
                </ul>
            </div>
        )
    }
}

export default Products;