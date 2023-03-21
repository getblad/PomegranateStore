import React, {CSSProperties, useState} from 'react'

import { Helmet } from 'react-helmet'

import './frame10.css'
import Frame1 from "../allstore/frame1";


function Frame10 (props:any) {
const [login, setLogin] = useState("");
const[password, setPassword] = useState("");
const submitHandler = (event:React.FormEvent) => {
  event.preventDefault();
  //TODO: make axios call to back
  setLogin("");
  setPassword("");


}
  return (

    <div className="container px-0">
      <div className="frame10-frame10">

        <div className="row">


        <div className="frame10-header">
          <div className="frame10-logo">
            <img
              src="/playground_assets/pomegranate1i701-qyamf-200h.png"
              alt="pomegranate1I701"
              className="frame10-pomegranate1"
            />
            <span className="frame10-text">
              <span className="frame10-text01">P</span>
              <span className="frame10-text02">o</span>
              <span>me<br/>Granate</span>
            </span>
          </div>
        <div className="frame10-frame28">
          <img
            src="/playground_assets/settings7117-5pq.svg"
            alt="settings7117"
            className="frame10-settings"
          />
          <img
            src="/playground_assets/bell7117-3bph.svg"
            alt="bell7117"
            className="frame10-bell"
          />
          <img
            src="/playground_assets/user7117-t3p9.svg"
            alt="user7117"
            className="frame10-user"
          />
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-6">
        <img
          src="/playground_assets/image29fdd0042097489eb1bd3501d101158d17117-cg1f-1000h.png"
          alt="IMAGE29FDD0042097489EB1BD3501D101158D17117"
          className="frame10-i-m-a-g-e29f-d-d0042097489e-b1b-d3501d101158d1"
        />
        </div>
          <div className="col-6">

        <div className="frame10-group28">
          <span className="frame10-text04 H1">
            <span>Log in</span>
          </span>
          <form onSubmit={submitHandler}>
          <button className="frame10-button" type="submit">
            <img
              src="/playground_assets/rectangle1172i711-247-200h.png"
              alt="Rectangle1172I711"
              className="frame10-rectangle1172"
            />
            <span className="frame10-text06 H3">
              <span>Log in</span>
            </span>
          </button>
          <div className="frame10-frame3">
            <div className="frame10-inputs">
              <input
                  type="text"
                  placeholder={"Login"}
                  value={login}
                  onChange={(e)  => setLogin(e.target.value)}
                  className="frame10-rectangle6 frame10-text08 Text"
              />
            </div>
            <div className="frame10-inputs1">
              <input
                type="password"
                placeholder={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="frame10-rectangle61 frame10-text12  Text"
            />
              </div>
            </div>
          </form>
          </div>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Frame10