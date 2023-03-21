import React from 'react';
import "./productCard.component.css"
export interface ProductCardProps{
	name:string
	itemsLeft:number
	image:string
}
function ProductCardComponent({name, itemsLeft, image} : ProductCardProps) {
	return (
			// <span classNameName="frame5-text016">
			//   <span>Pomegranate</span>
			// </span>
			// 					<div classNameName="frame5-frame3">
			//   <span classNameName="frame5-text018">
			// {/*    <span>left</span>*/}
			// {/*  </span>*/}
			// {/*						<span classNameName="frame5-text020">*/}
			//     <span>2.45 kg</span>
			// {/*  </span>*/}
			//{/*					</div>*/}
		//	{/*					<button classNameName="frame5-button">*/}
			//{/*  <span classNameName="frame5-text022">*/}
			//     <span>Order</span>
			//   </span>
			// 					</button>
			// 					<div classNameName="frame5-maskgroup">
			// 						<img
			// 							src="/playground_assets/img13161i221-ilmo-200h.png"
			// 							alt="IMG13161I221"
			// 							classNameName="frame5-i-m-g13161"
			// 						/>
			// 					</div>
			// 					<img
			// 						src="/playground_assets/rectangle10i221-1a9q-400h.png"
			// 						alt="Rectangle10I221"
			// 						classNameName="frame5-rectangle10"
			// 					/>
			// 					<div>
			// 						<div classNameName="frame5-eiminus">
			// 							<img
			// 								src="/playground_assets/minus1i221-4cjg.svg"
			// 								alt="minus1I221"
			// 								classNameName="frame5-minus1"
			// 							/>
			// 						</div>
			// 						<span classNameName="frame5-text024">
			//     <span>1 kg</span>
			//   </span>
			// 						<img
			// 							src="/playground_assets/eiplusi221-y11r.svg"
			// 							alt="eiplusI221"
			// 							classNameName="frame5-eiplus"
			// 						/>
			// 					</div>
			 				// </div>
		<>
		<div className="product-item">
			<img src="https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2015/08/single_strawberry__isolated_on_a_white_background.jpg"/>
				<div className="product-list">
					<h3>Strawberry</h3>
					<span className="amount">left 2.45 kg</span>
					<div className="kg-amount icons">
						<img src="https://img.icons8.com/android/256/plus.png"/>
						<div><span  id="amount">1</span></div>
					<img src=" https://img.icons8.com/material-sharp/256/minus.png"/>
				</div>
				<a href="" className="button">Order</a>
		</div>
		</div>
</>
	);
}

export default ProductCardComponent;