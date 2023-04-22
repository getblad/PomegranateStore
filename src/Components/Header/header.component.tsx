import React from 'react';
import { NavLink } from "react-router-dom";
import "./header.component.css"


function HeaderComponent(props:any) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light frame1-header">
		<div className="container-fluid">
			<a className="navbar-brand frame1-logo" href="#">
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
			</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
			        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
			        aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse collapse-navmenu-justify" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<div className="frame1-menu">

						<NavLink end to="/allstores" className={({ isActive }) => "nav-link " + (isActive ? "activate" : "")} >
							<div className="frame1-allstores">
              <span className="frame1-text28">
                <span>All stores</span>
              </span>
							</div>

						</NavLink>
						<NavLink to="/workers" className={({ isActive }) => "nav-link " + (isActive ? "activate" : "")}>
							<div className="frame1-allstores1">
              <span className="frame1-text30">
                <span>Workers</span>
              </span>
							</div>
						</NavLink>
						<NavLink to={"/storages"} className={({ isActive }) =>"nav-link " +(isActive ? "activate" : "")}>
							<div className="frame1-allstores2">
              <span className="frame1-text32">
                <span>Storages</span>
              </span>
							</div>
						</NavLink>
						<NavLink to={"/orderlist"} 	className={({ isActive }) =>"nav-link " +(isActive ? "activate" : "")}>
							<div className="frame1-allstores3">
              <span className="frame1-text34">
                <span>Order List</span>
              </span>
							</div>
						</NavLink>
					</div>
				</div>
				<div className="frame1-icons">
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

				</div>
				<div className="frame1-maskgroup">
					<NavLink to={"/profile"}>
						<img
							src="/playground_assets/unsplashznhrntwxg6qi275-xsqd-200h.png"
							alt="unsplashZnHRNtwXg6QI275"
							className="frame1-unsplash-zn-h-r-ntw-xg6q"
						/>
					</NavLink>
				</div>
			</div>
		</div>
	</nav>

	// 	<div className="frame1-header">
	//
	//
	// 		<div className="frame1-logo ">
	// 			<img
	// 				src="/playground_assets/pomegranate1i275-sspw-200h.png"
	// 				alt="pomegranate1I275"
	// 				className="frame1-pomegranate1"
	// 			/>
	// 			<span className="frame1-text22">
	// 			  <span className="frame1-text23">P</span>
	// 			  <span className="frame1-text24">o</span>
	// 			  <span>me</span>
	// 			  <br></br>
	// 			  <span>Granate</span>
	// 			</span>
	// 		</div>
	//
	// <nav className="frame1-menu navbar-expand-lg navbar-light">
	//
	// 	<div className="container-fluid">
	// 	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
	// 	        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	// 		<span className="navbar-toggler-icon"></span>
	// 	</button>
	// 	<div className="collapse navbar-collapse" id="navbarNav">
	// 		<div className="navbar-nav">
	// 	<NavLink end to="/allstores" className={({ isActive }) => "nav-link " + (isActive ? "activate" : "")} >
	// 	<div className="frame1-allstores">
    //           <span className="frame1-text28">
    //             <span>All stores</span>
    //           </span>
	// 	</div>
	//
	// 	</NavLink>
	//
	// 	<NavLink to="/workers" className={({ isActive }) => "nav-link " + (isActive ? "activate" : "")}>
	// 	<div className="frame1-allstores1">
    //           <span className="frame1-text30">
    //             <span>Workers</span>
    //           </span>
	// 	</div>
	// 	</NavLink>
	// 	<NavLink to={"/storages"} className={({ isActive }) =>"nav-link " +(isActive ? "activate" : "")}>
	// 	<div className="frame1-allstores2">
    //           <span className="frame1-text32">
    //             <span>Storages</span>
    //           </span>
	// 	</div>
	// 	</NavLink>
	// 	<NavLink to={"/orderlist"} 	className={({ isActive }) =>"nav-link " +(isActive ? "activate" : "")}>
	// 	<div className="frame1-allstores3">
    //           <span className="frame1-text34">
    //             <span>Order List</span>
    //           </span>
	// 	</div>
	// 	</NavLink>
	// 	</div>
	// 	</div>
	// 	</div>
	// </nav>
	//
	//
	// <nav className="frame1-icons">
	// 	<NavLink to={"/settings"}>
	// 	<img
	// 		src="/playground_assets/settingsi275-e9hw.svg"
	// 		alt="settingsI275"
	// 		className="frame1-settings"
	// 	/>
	// 	</NavLink>
	// 	<NavLink to={"/alerts"}>
	// 	<img
	// 		src="/playground_assets/belli275-9mdg.svg"
	// 		alt="bellI275"
	// 		className="frame1-bell"
	// 	/>
	// 	</NavLink>
	// </nav>
	// <nav className="frame1-maskgroup">
	// 	<NavLink to={"/profile"}>
	// 	<img
	// 		src="/playground_assets/unsplashznhrntwxg6qi275-xsqd-200h.png"
	// 		alt="unsplashZnHRNtwXg6QI275"
	// 		className="frame1-unsplash-zn-h-r-ntw-xg6q"
	// 	/>
	// 	</NavLink>
	// </nav>
	//
	// 	</div>

);
}

export default HeaderComponent;