import React from 'react';
import { NavLink } from "react-router-dom";
import "./header.component.css"


function HeaderComponent(props:any) {
	return (

		<div className="frame1-header">
		<div className="frame1-logo">
			<img
				src="/playground_assets/pomegranate1i275-sspw-200h.png"
				alt="pomegranate1I275"
				className="frame1-pomegranate1"
			/>
			<span className="frame1-text22">
              <span className="frame1-text23">P</span>
              <span className="frame1-text24">o</span>
              <span>me</span>
              <br></br>
              <span>Granate</span>
            </span>
		</div>
	<nav className="frame1-menu">
		<NavLink end to="/allstores" className={({ isActive }) => (isActive ? "active" : "")}>
		<div className="frame1-allstores">
              <span className="frame1-text28">
                <span>All stores</span>
              </span>
		</div>
		</NavLink>

		<NavLink to="/workers" className={({ isActive }) =>(isActive ? "active" : "")}>
		<div className="frame1-allstores1">
              <span className="frame1-text30">
                <span>Workers</span>
              </span>
		</div>
		</NavLink>
		<NavLink to={"/storages"} className={({ isActive }) =>(isActive ? "active" : "")}>
		<div className="frame1-allstores2">
              <span className="frame1-text32">
                <span>Storages</span>
              </span>
		</div>
		</NavLink>
		<NavLink to={"/orderlist"} 	className={({ isActive }) =>(isActive ? "active" : "")}>
		<div className="frame1-allstores3">
              <span className="frame1-text34">
                <span>Order List</span>
              </span>
		</div>
		</NavLink>
	</nav>


	<nav className="frame1-icons">
		<NavLink to={"/settings"}>
		<img
			src="/playground_assets/settingsi275-e9hw.svg"
			alt="settingsI275"
			className="frame1-settings"
		/>
		</NavLink>
		<NavLink to={"/alerts"}>
		<img
			src="/playground_assets/belli275-9mdg.svg"
			alt="bellI275"
			className="frame1-bell"
		/>
		</NavLink>
	</nav>
	<nav className="frame1-maskgroup">
		<NavLink to={"/profile"}>
		<img
			src="/playground_assets/ellipse37i275-sof-200h.png"
			alt="Ellipse37I275"
			className="frame1-ellipse37"
		/>
		<img
			src="/playground_assets/unsplashznhrntwxg6qi275-xsqd-200h.png"
			alt="unsplashZnHRNtwXg6QI275"
			className="frame1-unsplash-zn-h-r-ntw-xg6q"
		/>
		</NavLink>
	</nav>

		</div>

);
}

export default HeaderComponent;