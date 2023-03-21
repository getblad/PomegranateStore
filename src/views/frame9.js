import React from 'react'

import { Helmet } from 'react-helmet'

import './frame9.css'

const Frame9 = (props) => {
  return (
    <div className="frame9-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame9-frame9">
        <div className="frame9-products">
          <span className="frame9-text">
            <span>List</span>
          </span>
          <div className="frame9-frame2">
            <div className="frame9-group2">
              <span className="frame9-text02">
                <span>All workers</span>
              </span>
            </div>
            <span className="frame9-text04">
              <span>Store №1</span>
            </span>
            <span className="frame9-text06">
              <span>Store №2</span>
            </span>
            <span className="frame9-text08">
              <span>Store №3</span>
            </span>
          </div>
          <div className="frame9-filters">
            <div className="frame9-search-suggest-outline-l-statement1active">
              <div className="frame9-container1">
                <span className="frame9-text10">
                  <span>Search</span>
                </span>
              </div>
              <img
                src="/playground_assets/searchi701-dne.svg"
                alt="searchI701"
                className="frame9-search"
              />
            </div>
            <div className="frame9-filter">
              <img
                src="/playground_assets/filteri701-fbjp.svg"
                alt="filterI701"
                className="frame9-filter1"
              />
            </div>
          </div>
        </div>
        <div className="frame9-header">
          <div className="frame9-logo">
            <img
              src="/playground_assets/pomegranate1i701-9w4a-200h.png"
              alt="pomegranate1I701"
              className="frame9-pomegranate1"
            />
            <span className="frame9-text12">
              <span className="frame9-text13">P</span>
              <span className="frame9-text14">o</span>
              <span>me Granate</span>
            </span>
          </div>
          <div className="frame9-menu">
            <div className="frame9-allstores">
              <span className="frame9-text16">
                <span>All stores</span>
              </span>
            </div>
            <div className="frame9-allstores1">
              <span className="frame9-text18">
                <span>Workers</span>
              </span>
            </div>
            <div className="frame9-allstores2">
              <span className="frame9-text20">
                <span>Storages</span>
              </span>
            </div>
            <div className="frame9-allstores3">
              <span className="frame9-text22">
                <span>List</span>
              </span>
            </div>
          </div>
          <div className="frame9-icons">
            <img
              src="/playground_assets/settingsi701-sj1r.svg"
              alt="settingsI701"
              className="frame9-settings"
            />
            <img
              src="/playground_assets/belli701-z94n.svg"
              alt="bellI701"
              className="frame9-bell"
            />
          </div>
          <div className="frame9-maskgroup">
            <img
              src="/playground_assets/ellipse37i701-o97c-200h.png"
              alt="Ellipse37I701"
              className="frame9-ellipse37"
            />
            <img
              src="/playground_assets/unsplashznhrntwxg6qi701-94m-200h.png"
              alt="unsplashZnHRNtwXg6QI701"
              className="frame9-unsplash-zn-h-r-ntw-xg6q"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame9
