import React from "react";
import { Helmet } from 'react-helmet'

import './frame1.css'
import SelectComponent from "../../Components/Select/select.component";
import SearchBox from "../../Components/SeacrhBox/searchbox.component";
import StoreComponent, {StoreProps} from "../../Components/Store/store.component";
import HeaderComponent from "../../Components/Header/header.component";

const storesDB:StoreProps[] = [{
  name: "# 1",
  address: "9 MURRAY ST NEW YORK NY",
  imagePath: "/playground_assets/img13001361-8wvh-300h.png",
  link:""
},
  {address:"77 Mulberry St new york", name:"# 2", imagePath:"/playground_assets/img13031358-ro5v-300h.png", link:""},
  {name: "# 3", address:"something", imagePath:"/playground_assets/img13021359-8nqm-300h.png", link:""},
  {name: "# 5", address:"somewhere else", imagePath: "/playground_assets/img13011360-09hzm-300h.png", link:""}
]
const stores = storesDB.map(a =>
    <div className="col-4">
    <StoreComponent address={a.address} name={a.name} imagePath={a.imagePath} link={a.link}/>
</div>);
const Frame1 = (props:any) => {
  return (
        <>
        <div className="container">
          <div className="frame1-frame1">
            <div className="frame1-filters">
              <SelectComponent/>
              <SearchBox/>
            </div>
            <span className="frame1-text04">
          <span>All stores</span>
        </span>
            <div className="row">
              {stores}
            </div>
          </div>
        </div>
            <HeaderComponent/>
    </>

  )
}

export default Frame1
