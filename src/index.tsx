import React from 'react'
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './style.css'
import "./Pages/allstore/frame1.css"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Frame1 from './Pages/allstore/frame1'
import Frame5 from './views/frame5'
import Frame6 from './views/frame6'
import Frame7 from './views/frame7'
import Frame8 from './views/frame8'
import Frame9 from './views/frame9'
import Frame10 from './Pages/login/frame10'
import HeaderComponent from "./Components/Header/header.component";
import StorePage from "./Pages/store/store.page";
import Test from "./Pages/test/test";

const App = () => {
  return (
      <>
    <Router>
      <Routes>
      <Route path="/allStores" element={<Frame1/>} />
      <Route path="/login" element={<Frame10/>} />
      <Route path="/store" element={<StorePage name="store1" address="Hativat Carmeli45" workers="12" openingHours={"9-10"}
      photo={""}/>} />

        <Route path={"/test"} element={<Test/>}/>
      </Routes>


    </Router>
      </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
