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
		<div className="container">
			<div className="frame5-frame5">
				<div className="frame5-products">
          <span className="frame5-text">
             <div className="frame5-filters">
	            Products
					<SearchBox/>
					</div>
          </span>
					<Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
						<TabList className="tab-list">
							<Tab className="tab">All products</Tab>
							<Tab className="tab">Fruit</Tab>
							<Tab className="tab">Vegetables</Tab>
							<Tab className="tab">Snacks</Tab>
							<Tab className="tab">Meat</Tab>
							<Tab className="tab">Beverages</Tab>
						</TabList>

						<div className="frame5-productcards">

						<TabPanel className="tap-panel">

							<ProductCardComponent name={"ds"} itemsLeft={1} image={""}/>

							{/*<div className="frame4-productcards">*/}
				{/*				<div className="frame5-group3">*/}
              {/*<span className="frame5-text016">*/}
              {/*  <span>Pomegranate</span>*/}
              {/*</span>*/}
				{/*					<div className="frame5-frame3">*/}
              {/*  <span className="frame5-text018">*/}
              {/*    <span>left</span>*/}
              {/*  </span>*/}
				{/*						<span className="frame5-text020">*/}
              {/*    <span>2.45 kg</span>*/}
              {/*  </span>*/}
				{/*					</div>*/}
				{/*					<button className="frame5-button">*/}
              {/*  <span className="frame5-text022">*/}
              {/*    <span>Order</span>*/}
              {/*  </span>*/}
				{/*					</button>*/}
				{/*					<div className="frame5-maskgroup">*/}
				{/*						<img*/}
				{/*							src="/playground_assets/img13161i221-ilmo-200h.png"*/}
				{/*							alt="IMG13161I221"*/}
				{/*							className="frame5-i-m-g13161"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*					<img*/}
				{/*						src="/playground_assets/rectangle10i221-1a9q-400h.png"*/}
				{/*						alt="Rectangle10I221"*/}
				{/*						className="frame5-rectangle10"*/}
				{/*					/>*/}
				{/*					<div>*/}
				{/*						<div className="frame5-eiminus">*/}
				{/*							<img*/}
				{/*								src="/playground_assets/minus1i221-4cjg.svg"*/}
				{/*								alt="minus1I221"*/}
				{/*								className="frame5-minus1"*/}
				{/*							/>*/}
				{/*						</div>*/}
				{/*						<span className="frame5-text024">*/}
              {/*    <span>1 kg</span>*/}
              {/*  </span>*/}
				{/*						<img*/}
				{/*							src="/playground_assets/eiplusi221-y11r.svg"*/}
				{/*							alt="eiplusI221"*/}
				{/*							className="frame5-eiplus"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*				<div className="frame5-group7">*/}
              {/*<span className="frame5-text026">*/}
              {/*  <span>Persimmon</span>*/}
              {/*</span>*/}
				{/*					<div className="frame5-frame31">*/}
              {/*  <span className="frame5-text028">*/}
              {/*    <span>left</span>*/}
              {/*  </span>*/}
				{/*						<span className="frame5-text030">*/}
              {/*    <span>6.53 kg</span>*/}
              {/*  </span>*/}
				{/*					</div>*/}
				{/*					<button className="frame5-button1">*/}
              {/*  <span className="frame5-text032">*/}
              {/*    <span>Order</span>*/}
              {/*  </span>*/}
				{/*					</button>*/}
				{/*					<div className="frame5-maskgroup1">*/}
				{/*						<img*/}
				{/*							src="/playground_assets/img13161i264-ekz-200h.png"*/}
				{/*							alt="IMG13161I264"*/}
				{/*							className="frame5-i-m-g131611"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*					<img*/}
				{/*						src="/playground_assets/rectangle10i264-ykfb-400h.png"*/}
				{/*						alt="Rectangle10I264"*/}
				{/*						className="frame5-rectangle101"*/}
				{/*					/>*/}
				{/*					<div className="frame5-frame351">*/}
				{/*						<div className="frame5-eiminus1">*/}
				{/*							<img*/}
				{/*								src="/playground_assets/minus1i264-njie.svg"*/}
				{/*								alt="minus1I264"*/}
				{/*								className="frame5-minus11"*/}
				{/*							/>*/}
				{/*						</div>*/}
				{/*						<span className="frame5-text034">*/}
              {/*    <span>1 kg</span>*/}
              {/*  </span>*/}
				{/*						<img*/}
				{/*							src="/playground_assets/eiplusi264-wump.svg"*/}
				{/*							alt="eiplusI264"*/}
				{/*							className="frame5-eiplus1"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*				<div className="frame5-group4">*/}
              {/*<span className="frame5-text036">*/}
              {/*  <span>Pomegranate large</span>*/}
              {/*</span>*/}
				{/*					<div className="frame5-frame32">*/}
              {/*  <span className="frame5-text038">*/}
              {/*    <span>left</span>*/}
              {/*  </span>*/}
				{/*						<span className="frame5-text040">*/}
              {/*    <span>0.45 kg</span>*/}
              {/*  </span>*/}
				{/*					</div>*/}
				{/*					<button className="frame5-button2">*/}
              {/*  <span className="frame5-text042">*/}
              {/*    <span>Order</span>*/}
              {/*  </span>*/}
				{/*					</button>*/}
				{/*					<div className="frame5-maskgroup2">*/}
				{/*						<img*/}
				{/*							src="/playground_assets/img13161i233-mrv-200h.png"*/}
				{/*							alt="IMG13161I233"*/}
				{/*							className="frame5-i-m-g131612"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*					<img*/}
				{/*						src="/playground_assets/rectangle10i233-wuf-400h.png"*/}
				{/*						alt="Rectangle10I233"*/}
				{/*						className="frame5-rectangle102"*/}
				{/*					/>*/}
				{/*					<div className="frame5-frame352">*/}
				{/*						<div className="frame5-eiminus2">*/}
				{/*							<img*/}
				{/*								src="/playground_assets/minus1i233-kex.svg"*/}
				{/*								alt="minus1I233"*/}
				{/*								className="frame5-minus12"*/}
				{/*							/>*/}
				{/*						</div>*/}
				{/*						<span className="frame5-text044">*/}
              {/*    <span>1 kg</span>*/}
              {/*  </span>*/}
				{/*						<img*/}
				{/*							src="/playground_assets/eiplusi233-os3.svg"*/}
				{/*							alt="eiplusI233"*/}
				{/*							className="frame5-eiplus2"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*				<div className="frame5-group8">*/}
              {/*<span className="frame5-text046">*/}
              {/*  <span>Tandarin</span>*/}
              {/*</span>*/}
				{/*					<div className="frame5-frame33">*/}
              {/*  <span className="frame5-text048">*/}
              {/*    <span>left</span>*/}
              {/*  </span>*/}
				{/*						<span className="frame5-text050">*/}
              {/*    <span>0.00 kg</span>*/}
              {/*  </span>*/}
				{/*					</div>*/}
				{/*					<button className="frame5-button3">*/}
              {/*  <span className="frame5-text052">*/}
              {/*    <span>Order</span>*/}
              {/*  </span>*/}
				{/*					</button>*/}
				{/*					<div className="frame5-maskgroup3">*/}
				{/*						<img*/}
				{/*							src="/playground_assets/img13161i264-sbyj-200h.png"*/}
				{/*							alt="IMG13161I264"*/}
				{/*							className="frame5-i-m-g131613"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*					<img*/}
				{/*						src="/playground_assets/rectangle10i264-hlq-400h.png"*/}
				{/*						alt="Rectangle10I264"*/}
				{/*						className="frame5-rectangle103"*/}
				{/*					/>*/}
				{/*					<div className="frame5-frame353">*/}
				{/*						<div className="frame5-eiminus3">*/}
				{/*							<img*/}
				{/*								src="/playground_assets/minus1i264-15g.svg"*/}
				{/*								alt="minus1I264"*/}
				{/*								className="frame5-minus13"*/}
				{/*							/>*/}
				{/*						</div>*/}
				{/*						<span className="frame5-text054">*/}
              {/*    <span>1 kg</span>*/}
              {/*  </span>*/}
				{/*						<img*/}
				{/*							src="/playground_assets/eiplusi264-hlo0g.svg"*/}
				{/*							alt="eiplusI264"*/}
				{/*							className="frame5-eiplus3"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*				<div className="frame5-group5">*/}
              {/*<span className="frame5-text056">*/}
              {/*  <span>Pomegranate AZE</span>*/}
              {/*</span>*/}
				{/*					<div className="frame5-frame34">*/}
              {/*  <span className="frame5-text058">*/}
              {/*    <span>left</span>*/}
              {/*  </span>*/}
				{/*						<span className="frame5-text060">*/}
              {/*    <span>3.65 kg</span>*/}
              {/*  </span>*/}
				{/*					</div>*/}
				{/*					<button className="frame5-button4">*/}
              {/*  <span className="frame5-text062">*/}
              {/*    <span>Order</span>*/}
              {/*  </span>*/}
				{/*					</button>*/}
				{/*					<div className="frame5-maskgroup4">*/}
				{/*						<img*/}
				{/*							src="/playground_assets/img13161i233-zmtm-200h.png"*/}
				{/*							alt="IMG13161I233"*/}
				{/*							className="frame5-i-m-g131614"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*					<img*/}
				{/*						src="/playground_assets/rectangle10i233-fkm-400h.png"*/}
				{/*						alt="Rectangle10I233"*/}
				{/*						className="frame5-rectangle104"*/}
				{/*					/>*/}
				{/*					<div className="frame5-frame354">*/}
				{/*						<div className="frame5-eiminus4">*/}
				{/*							<img*/}
				{/*								src="/playground_assets/minus1i233-vk3.svg"*/}
				{/*								alt="minus1I233"*/}
				{/*								className="frame5-minus14"*/}
				{/*							/>*/}
				{/*						</div>*/}
				{/*						<span className="frame5-text064">*/}
              {/*    <span>1 kg</span>*/}
              {/*  </span>*/}
				{/*						<img*/}
				{/*							src="/playground_assets/eiplusi233-ej6.svg"*/}
				{/*							alt="eiplusI233"*/}
				{/*							className="frame5-eiplus4"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*				<div className="frame5-group9">*/}
              {/*<span className="frame5-text066">*/}
              {/*  <span>Pinetapple</span>*/}
              {/*</span>*/}
				{/*					<div className="frame5-frame35 frame5-frame35">*/}
              {/*  <span className="frame5-text068">*/}
              {/*    <span>left</span>*/}
              {/*  </span>*/}
				{/*						<span className="frame5-text070">*/}
              {/*    <span>2 pcs</span>*/}
              {/*  </span>*/}
				{/*					</div>*/}
				{/*					<button className="frame5-button5">*/}
              {/*  <span className="frame5-text072">*/}
              {/*    <span>Order</span>*/}
              {/*  </span>*/}
				{/*					</button>*/}
				{/*					<div className="frame5-maskgroup5">*/}
				{/*						<img*/}
				{/*							src="/playground_assets/img13161i264-0s8-200h.png"*/}
				{/*							alt="IMG13161I264"*/}
				{/*							className="frame5-i-m-g131615"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*					<img*/}
				{/*						src="/playground_assets/rectangle10i264-8l5f-400h.png"*/}
				{/*						alt="Rectangle10I264"*/}
				{/*						className="frame5-rectangle105"*/}
				{/*					/>*/}
				{/*					<div className="frame5-frame355">*/}
				{/*						<div className="frame5-eiminus5">*/}
				{/*							<img*/}
				{/*								src="/playground_assets/minus1i264-hwx.svg"*/}
				{/*								alt="minus1I264"*/}
				{/*								className="frame5-minus15"*/}
				{/*							/>*/}
				{/*						</div>*/}
				{/*						<span className="frame5-text074">*/}
              {/*    <span>1 pcs</span>*/}
              {/*  </span>*/}
				{/*						<img*/}
				{/*							src="/playground_assets/eiplusi264-72wa.svg"*/}
				{/*							alt="eiplusI264"*/}
				{/*							className="frame5-eiplus5"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*				<div className="frame5-group6">*/}
              {/*<span className="frame5-text076">*/}
              {/*  <span>Orange large</span>*/}
              {/*</span>*/}
				{/*					<div className="frame5-frame36">*/}
              {/*  <span className="frame5-text078">*/}
              {/*    <span>left</span>*/}
              {/*  </span>*/}
				{/*						<span className="frame5-text080">*/}
              {/*    <span>5.36 kg</span>*/}
              {/*  </span>*/}
				{/*					</div>*/}
				{/*					<button className="frame5-button6">*/}
              {/*  <span className="frame5-text082">*/}
              {/*    <span>Order</span>*/}
              {/*  </span>*/}
				{/*					</button>*/}
				{/*					<div className="frame5-maskgroup6">*/}
				{/*						<img*/}
				{/*							src="/playground_assets/img13161i233-n1po-200h.png"*/}
				{/*							alt="IMG13161I233"*/}
				{/*							className="frame5-i-m-g131616"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*					<img*/}
				{/*						src="/playground_assets/rectangle10i233-59aq-400h.png"*/}
				{/*						alt="Rectangle10I233"*/}
				{/*						className="frame5-rectangle106"*/}
				{/*					/>*/}
				{/*					<div className="frame5-frame356">*/}
				{/*						<div className="frame5-eiminus6">*/}
				{/*							<img*/}
				{/*								src="/playground_assets/minus1i233-hule.svg"*/}
				{/*								alt="minus1I233"*/}
				{/*								className="frame5-minus16"*/}
				{/*							/>*/}
				{/*						</div>*/}
				{/*						<span className="frame5-text084">*/}
              {/*    <span>1 kg</span>*/}
              {/*  </span>*/}
				{/*						<img*/}
				{/*							src="/playground_assets/eiplusi233-s6h9.svg"*/}
				{/*							alt="eiplusI233"*/}
				{/*							className="frame5-eiplus6"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*				<div className="frame5-group10">*/}
              {/*<span className="frame5-text086">*/}
              {/*  <span>*/}
              {/*    Orange*/}
              {/*    <span*/}
	          {/*        dangerouslySetInnerHTML={{*/}
		      {/*            __html: ' ',*/}
	          {/*        }}*/}
              {/*    />*/}
              {/*  </span>*/}
              {/*</span>*/}
				{/*					<div className="frame5-frame37">*/}
              {/*  <span className="frame5-text088">*/}
              {/*    <span>left</span>*/}
              {/*  </span>*/}
				{/*						<span className="frame5-text090">*/}
              {/*    <span>2.36 kg</span>*/}
              {/*  </span>*/}
				{/*					</div>*/}
				{/*					<button className="frame5-button7">*/}
              {/*  <span className="frame5-text092">*/}
              {/*    <span>Order</span>*/}
              {/*  </span>*/}
				{/*					</button>*/}
				{/*					<div className="frame5-maskgroup7">*/}
				{/*						<img*/}
				{/*							src="/playground_assets/img13161i264-ourm-200h.png"*/}
				{/*							alt="IMG13161I264"*/}
				{/*							className="frame5-i-m-g131617"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*					<img*/}
				{/*						src="/playground_assets/rectangle10i264-l6wg-400h.png"*/}
				{/*						alt="Rectangle10I264"*/}
				{/*						className="frame5-rectangle107"*/}
				{/*					/>*/}
				{/*					<div className="frame5-frame357">*/}
				{/*						<div className="frame5-eiminus7">*/}
				{/*							<img*/}
				{/*								src="/playground_assets/minus1i264-ipzj.svg"*/}
				{/*								alt="minus1I264"*/}
				{/*								className="frame5-minus17"*/}
				{/*							/>*/}
				{/*						</div>*/}
				{/*						<span className="frame5-text094">*/}
              {/*    <span>1 kg</span>*/}
              {/*  </span>*/}
				{/*						<img*/}
				{/*							src="/playground_assets/eiplusi264-eoz.svg"*/}
				{/*							alt="eiplusI264"*/}
				{/*							className="frame5-eiplus7"*/}
				{/*						/>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className="product-item">*/}
				{/*				<img*/}
				{/*					src="https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2015/08/single_strawberry__isolated_on_a_white_background.jpg"/>*/}
				{/*					<div className="product-list">*/}
				{/*						<h3>Strawberry</h3>*/}
				{/*						<span className="price">200$</span>*/}
				{/*						<a href="" className="button">Basket</a>*/}
				{/*					</div>*/}

				{/*			</div>*/}
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
			{/*		<div className="frame5-frame2">*/}
			{/*			<div className="frame5-group2">*/}
            {/*  <span className="frame5-text002">*/}
            {/*    <span>All products</span>*/}
            {/*  </span>*/}
			{/*			</div>*/}
			{/*			<span className="frame5-text004">*/}
            {/*  <span>Fruit</span>*/}
            {/*</span>*/}
			{/*			<span className="frame5-text006">*/}
            {/*  <span>Vegetables</span>*/}
            {/*</span>*/}
			{/*			<span className="frame5-text008">*/}
            {/*  <span>Snacks</span>*/}
            {/*</span>*/}
			{/*			<span className="frame5-text010">*/}
            {/*  <span>Meat</span>*/}
            {/*</span>*/}
			{/*			<span className="frame5-text012">*/}
            {/*  <span>Beverages</span>*/}
            {/*</span>*/}
			{/*		</div>*/}
				</div>



			{/*	<div className="frame5-storeinfo">*/}
          {/*<span className="frame5-text096 H1">*/}
          {/*  <span>{name}</span>*/}
          {/*</span>*/}
			{/*		<span className="frame5-text098">*/}
          {/*  <span>{address}</span>*/}
          {/*</span>*/}
			{/*		<span className="frame5-text100">*/}
          {/*  <span>Opening hours: {openingHours}</span>*/}
          {/*</span>*/}
			{/*		<div className="frame5-group1">*/}
          {/*  <span className="frame5-text102">*/}
          {/*    <span>Workers: {workers}</span>*/}
          {/*  </span>*/}
			{/*			<span className="frame5-text104">*/}
          {/*    <span>See all</span>*/}
          {/*  </span>*/}
			{/*			<span className="frame5-text106">*/}
          {/*    <span>*/}
          {/*      Director - Daria S.*/}
          {/*      <span*/}
	      {/*          dangerouslySetInnerHTML={{*/}
		  {/*              __html: ' ',*/}
	      {/*          }}*/}
          {/*      />*/}
          {/*    </span>*/}
          {/*  </span>*/}
			{/*			<span className="frame5-text108">*/}
          {/*    <span>*/}
          {/*      Manager - Karl J.*/}
          {/*      <span*/}
	      {/*          dangerouslySetInnerHTML={{*/}
		  {/*              __html: ' ',*/}
	      {/*          }}*/}
          {/*      />*/}
          {/*    </span>*/}
          {/*  </span>*/}
			{/*			<span className="frame5-text110 Text">*/}
          {/*    <span>*/}
          {/*      Accountant - Mari K.*/}
          {/*      <span*/}
	      {/*          dangerouslySetInnerHTML={{*/}
		  {/*              __html: ' ',*/}
	      {/*          }}*/}
          {/*      />*/}
          {/*    </span>*/}
          {/*  </span>*/}
			{/*		</div>*/}
			{/*		<span className="frame5-text112">*/}
          {/*  <span>*/}
          {/*    <span>Contacts:</span>*/}
          {/*    <br></br>*/}
          {/*    <span>tel: +3456142536</span>*/}
          {/*    <br></br>*/}
          {/*    <span>e-mail: oh.no1pome@granate.com</span>*/}
          {/*  </span>*/}
          {/*</span>*/}
			{/*		<img*/}
			{/*			src="/playground_assets/img130011657-9ixa-500h.png"*/}
			{/*			alt="IMG130011657"*/}
			{/*			className="frame5-i-m-g13001"*/}
			{/*		/>*/}
			{/*	</div>*/}
			{/*	<div className="frame5-breadcrumbs">*/}
          {/*<span className="frame5-text119">*/}
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

			{/*	</div>*/}

			</div>
		</div>
			<HeaderComponent/>
			</>

	);
}

export default StorePage;