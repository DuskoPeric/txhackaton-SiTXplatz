

import "./BookPage.scss";
import React, { useState } from 'react';

const BookPage = () => {

    const [data, setData] = useState({
        "o1-1":false,
        "o1-2":false,
        "o1-3":false,
        "o1-4":false,
        "o1-5":false,
        "o1-6":false,
        "o1-7":false,
        "o1-8":false,
        "o1-9":false,
        "o1-10":false,
        "o1-11":false,
        "o1-12":false,
        "o1-13":false,
        "o1-14":false,
        "o1-15":false,
        "o1-16":false,
        "o1-17":false,
        "o1-18":false,
    })


    return (
        <>
        <div className="main-container">
        <div className="map-holder">
          <div className="row">
            <div className="office vertical big5">
              <div className="chair-row long5">
                  <div id="o1-1" className={`chair revert ${data['o1-1']?'reserved':null}`}></div>
                  <div id="o1-2"  className={`chair revert ${data['o1-2']?'reserved':null}`}></div>
                  <div id="o1-3"  className={`chair revert ${data['o1-3']?'reserved':null}`}></div>
                  <div  id="o1-4" className={`chair revert ${data['o1-4']?'reserved':null}`}></div>
                  <div  id="o1-5" className={`chair revert ${data['o1-5']?'reserved':null}`}></div>
                <div  id="o1-6" className={`chair  ${data['o1-6']?'reserved':null}`}></div>
                <div id="o1-7"  className={`chair  ${data['o1-7']?'reserved':null}`}></div>
                <div id="o1-8"  className={`chair  ${data['o1-8']?'reserved':null}`}></div>
                <div id="o1-9"  className={`chair  ${data['o1-9']?'reserved':null}`}></div>
                <div id="o1-10"  className={`chair  ${data['o1-10']?'reserved':null}`}></div>
              </div>
              <div className="chair-row long4">
                <div id="o1-11" className={`chair revert ${data['o1-11']?'reserved':null}`}></div>
                <div id="o1-12" className={`chair revert ${data['o1-12']?'reserved':null}`}></div>
                <div id="o1-13" className={`chair revert ${data['o1-13']?'reserved':null}`}></div>
                <div id="o1-14" className={`chair revert ${data['o1-14']?'reserved':null}`}></div>
                <div id="o1-15" className={`chair  ${data['o1-15']?'reserved':null}`}></div>
                <div id="o1-16" className={`chair  ${data['o1-16']?'reserved':null}`}></div>
                <div id="o1-17" className={`chair  ${data['o1-17']?'reserved':null}`}></div>
                <div id="o1-18" className={`chair  ${data['o1-18']?'reserved':null}`}></div>
              </div>
            </div>
            <div className="office horizontal wall-left big3">
              <div className="chair-column long3">
                <div className="chair revert-left"></div>
                <div className="chair revert-right"></div>
                <div className="chair revert-left"></div>
                <div className="chair revert-right"></div>
                <div className="chair revert-left"></div>
                <div className="chair revert-right"></div>
              </div>
              <div className="chair-column long3">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
            </div>
            <div className="office horizontal wall-left big2">
              <div className="chair-column long2">
                <div className="chair revert-left"></div>
                <div className="chair revert-right"></div>
                <div className="chair revert-left"></div>
                <div className="chair revert-right"></div>
              </div>
              <div className="chair-column long2">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
            </div>
            <div className="office horizontal wall-left big3">
                <div className="chair-column long3">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                </div>
                <div className="chair-column long3">
                    <div className="chair revert-left"></div>
                    <div className="chair revert-right"></div>
                    <div className="chair revert-left"></div>
                    <div className="chair revert-right"></div>
                    <div className="chair revert-left"></div>
                    <div className="chair revert-right"></div>
                </div>
              </div>
            <div className="office horizontal wall-left big3">
              <div className="chair-column long3">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
              <div className="chair-column long3">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
            </div>
            <div className="office horizontal wall-left big3 no-bg">
  
              </div>
            <div className="terasa">
  
            </div>
          </div>
          <div className="row">
            <div className="office vertical big4 wall-top">
              <div className="chair-row long4">
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair "></div>
                <div className="chair "></div>
                <div className="chair"></div>
                <div className="chair"></div>
              </div>
              <div className="chair-row long4">
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
              </div>
              <div className="chair-row long4">
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
              </div>
            </div>
            <div>
              <div className="kitchen"></div>
            </div>
            <div>
                <div className="wc"></div>
            </div>
  
          </div>
          <div className="row">
            <div className="office vertical big5 wall-top">
              <div className="chair-row long5">
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
              </div>
              <div className="chair-row long5">
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
              </div>
            </div>
            <div>
                <div className="printer"></div>
            </div>
          </div>
          <div className="row">
            <div className="office vertical big4 wall-top">
              <div className="chair-row long4">
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
              </div>
              <div className="chair-row long4">
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
              </div>
              <div className="chair-row long4">
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair revert"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
                <div className="chair"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="office vertical big5 wall-top">
              <div className="chair-row long5">
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
              </div>
              <div className="chair-row long5">
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
              </div>
            </div>
            <div>
                <div className="wc lower"></div>
            </div>
          </div>
          <div className="row bottom2">
            <div className="office vertical big5 wall-top">
              <div className="chair-row long5">
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
              </div>
              <div className="chair-row long5">
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair revert"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
                  <div className="chair"></div>
              </div>
            </div>
            <div className="office horizontal wall-left big3">
              <div className="chair-column long3">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
              <div className="chair-column long3">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
            </div>
            <div className="office horizontal wall-left big2">
              <div className="chair-column long2">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
              <div className="chair-column long2">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
            </div>
            <div className="office horizontal wall-left big3">
              <div className="chair-column long3">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
              <div className="chair-column long3">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
            </div>
            <div className="office horizontal wall-left big2-2">
              <div className="chair-column long2">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
            </div>
            <div className="office horizontal wall-left big2-2">
              <div className="chair-column long2">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
            </div>
            <div className="office horizontal wall-left big2-2long">
              <div className="chair-column long2">
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
                  <div className="chair revert-left"></div>
                  <div className="chair revert-right"></div>
              </div>
            </div>
            <div>
            <div class="kitchen large"></div>
          </div>
          <div>
          <div class="terasa2"></div>
          </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default BookPage;
