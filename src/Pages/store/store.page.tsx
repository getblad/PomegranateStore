import React, {useState} from 'react';
import "./store.page.css"
import '../allstore/frame1.css'
import HeaderComponent from "../../Components/Header/header.component";
import SearchBox from "../../Components/SeacrhBox/searchbox.component";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import ProductCardComponent from "../../Components/ProductCard/productCard.component";

export interface StoreProps{
	name:string
	photo:string
	address:string
	openingHours:string
	workers:string
}
function StorePage({name, address, workers, photo, openingHours}:StoreProps) {
	const [tabIndex, setTabIndex] = useState(0);

	const handleTabSelect = (index:number) => {
		setTabIndex(index);
	};
	return (
		<>
			<HeaderComponent/>
		<div className="container">
			{/*<div className="frame5-frame5">*/}




				<div className="row">
						<div className="col-6">
					<div className="frame5-storeinfo">
			{/*		 <span className="frame5-text119">*/}
          {/*  <span>All stores</span>*/}
          {/*</span>*/}
			{/*		<img*/}
			{/*			src="/playground_assets/iconsarrowsdiagramsarrow51692-bvt8.svg"*/}
			{/*			alt="IconsArrowsDiagramsArrow51692"*/}
			{/*			className="frame5-icons-arrows-diagrams-arrow5"*/}
			{/*		/>*/}
			{/*		<span className="frame5-text121">*/}
          {/*  <span>{name}</span>*/}
          {/*</span>*/}
          <span className="frame5-text096 H1">
            {name}
          </span>
					<span className="frame5-text098">
            {address}
          </span>
					<span className="frame5-text100">
            Opening hours: {openingHours}
          </span>
						<br/>
							<span className="frame5-text112">

              Contacts:
              <br></br>
              tel: +3456142536
              <br></br>
              e-mail: oh.no1pome@granate.com

          </span>
						<br/>
					<div className="frame5-group1">
            <span className="frame5-text102">
              Workers: {workers}
            </span>
						<div className="frame5-text104">
              See all
            </div>
					</div>
						<div className="frame5-text106">
                Director - Daria S.
            </div>
						<div className="frame5-text106">
                Manager - Karl J.

            </div>
						<div className="frame5-text106 Text">
                Accountant - Mari K.
            </div>
					</div>

				</div>
				<div className="col-6">
					<img
						src="/playground_assets/img130011657-9ixa-500h.png"
						alt="IMG130011657"
						className="frame5-i-m-g13001 img-fluid w-100 my-3"
					/>

				</div>
				</div>
				<div className="row frame5-products my-5">
          <span className="frame5-text">
             <div className="frame5-filters">
	            Products
					<SearchBox/>
					</div>
          </span>
					<Tabs selectedIndex={tabIndex} onSelect={handleTabSelect} className="my-3">
						<TabList className="tab-list">
							<Tab className="tab">All products</Tab>
							<Tab className="tab">Fruit</Tab>
							<Tab className="tab">Vegetables</Tab>
							<Tab className="tab">Snacks</Tab>
							<Tab className="tab">Meat</Tab>
							<Tab className="tab">Beverages</Tab>
						</TabList>

						<div className="frame5-productcards my-3">

							<TabPanel className="tap-panel">

								<ProductCardComponent name={"ds"} itemsLeft={1} image={""}/>
							</TabPanel>
							<TabPanel className="tap-panel">
								asd
								{/* content for Fruit tab */}
							</TabPanel>
							<TabPanel className="tap-panel">
								asdsad
								{/* content for Vegetables tab */}
							</TabPanel >
							<TabPanel className="tap-panel">
								asdas
								{/* content for Snacks tab */}
							</TabPanel>
							<TabPanel className="tap-panel">
								asdsa
								{/* content for Meat tab */}
							</TabPanel>
							<TabPanel className="tap-panel">
								asdas
								{/* content for Beverages tab */}
							</TabPanel>
						</div>
					</Tabs>
				</div>
			{/*</div>*/}
		</div>
			</>

	);
}

export default StorePage;