import React from 'react';
import "./productCard.component.css"
export interface ProductCardProps{
	name:string
	itemsLeft:number
	image:string
}
function ProductCardComponent({name, itemsLeft, image} : ProductCardProps) {
	return (
        <div className="product-item">
                <img src="https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2015/08/single_strawberry__isolated_on_a_white_background.jpg"/>
                <div className="product-list">
                        <h3>Strawberry</h3>
                        <span className="amount">left 2.45 kg</span>
                <div className="kg-amount">
                        <img className="plus-minus-btn" src="https://img.icons8.com/android/256/plus.png"/>
                        <div><span id="amount">1</span></div>
                        <img className="plus-minus-btn" src=" https://img.icons8.com/material-sharp/256/minus.png"/>
                </div>
                        {/*<a href="" className="button">Order</a>*/}
	                <span className="button">Order</span>
                </div>
        </div>
	);
}

export default ProductCardComponent;