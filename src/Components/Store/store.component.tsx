import React from 'react';
import "./store.component.css"
export interface StoreProps {
	address:string;
	name: string;
	imagePath:string;
	link:string
}

function StoreComponent(props:StoreProps) {
	return (
			<div className="frame1-frame2">
		<a href={props.link}>
		<img
			src={props.imagePath}
			className="img-fluid"
		/>
		</a>
          <span className="frame1-text06">
            <span>{props.name}</span>
          </span>
		<span className="frame1-text08">
            <span>{props.address}</span>
          </span>
	</div>
	);
}

export default StoreComponent;