

import "./BookPage.scss";
import React, { useState } from 'react';
import Popup from "../../components/popup/Popup";

const BookPage = () => {

    const [openPopup, setOpenPopup] = useState(false);
    const [type, setType] = useState(null);
    const [chair, setChair] = useState(null);
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

    const setReservation=()=>{
        const copyData={...data}
        copyData[chair]=true;
        setData(copyData)
        setOpenPopup(false);
    }

    const hadlePopup=(id,type)=>{
        setType(type);
        setChair(id);
        setOpenPopup(true)
    }


    return (
        <>
        <div className="main-container">
        <div className="parkalot">Book a Parking</div>
        <div className="parkalot jelena">Complain to Jelena</div>
        <div className="map-holder">
          <div className="row">
            <div className="office vertical big5">
              <div className="chair-row long5">
                  <div id="o1-1" onClick={()=>{!data['o1-1'] && hadlePopup('o1-1','regular')}} className={`chair revert ${data['o1-1']?'reserved':null}`}></div>
                  <div id="o1-2"  onClick={()=>{!data['o1-2'] && hadlePopup('o1-2','regular')}} className={`chair revert ${data['o1-2']?'reserved':null}`}></div>
                  <div id="o1-3"  onClick={()=>{!data['o1-3'] && hadlePopup('o1-3','regular')}} className={`chair revert ${data['o1-3']?'reserved':null}`}></div>
                  <div  id="o1-4" onClick={()=>{!data['o1-4'] && hadlePopup('o1-4','regular')}} className={`chair revert ${data['o1-4']?'reserved':null}`}></div>
                  <div  id="o1-5" onClick={()=>{!data['o1-5'] && hadlePopup('o1-5','regular')}} className={`chair revert ${data['o1-5']?'reserved':null}`}></div>
                <div  id="o1-6" onClick={()=>{!data['o1-6'] && hadlePopup('o1-6','regular')}} className={`chair  ${data['o1-6']?'reserved':null}`}></div>
                <div id="o1-7"  onClick={()=>{!data['o1-7'] && hadlePopup('o1-7','regular')}} className={`chair  ${data['o1-7']?'reserved':null}`}></div>
                <div id="o1-8"  onClick={()=>{!data['o1-8'] && hadlePopup('o1-8','regular')}} className={`chair  ${data['o1-8']?'reserved':null}`}></div>
                <div id="o1-9"  onClick={()=>{!data['o1-9'] && hadlePopup('o1-9','regular')}} className={`chair  ${data['o1-9']?'reserved':null}`}></div>
                <div id="o1-10"  onClick={()=>{!data['o1-10'] && hadlePopup('o1-10','regular')}} className={`chair  ${data['o1-10']?'reserved':null}`}></div>
              </div>
              <div className="chair-row long4">
                <div id="o1-11" onClick={()=>{!data['o1-11'] && hadlePopup('o1-11','regular')}}v className={`chair revert ${data['o1-11']?'reserved':null}`}></div>
                <div id="o1-12" onClick={()=>{!data['o1-12'] && hadlePopup('o1-12','regular')}} className={`chair revert ${data['o1-12']?'reserved':null}`}></div>
                <div id="o1-13" onClick={()=>{!data['o1-13'] && hadlePopup('o1-13','regular')}} className={`chair revert ${data['o1-13']?'reserved':null}`}></div>
                <div id="o1-14" onClick={()=>{!data['o1-14'] && hadlePopup('o1-14','regular')}} className={`chair revert ${data['o1-14']?'reserved':null}`}></div>
                <div id="o1-15" onClick={()=>{!data['o1-15'] && hadlePopup('o1-15','regular')}} className={`chair  ${data['o1-15']?'reserved':null}`}></div>
                <div id="o1-16" onClick={()=>{!data['o1-16'] && hadlePopup('o1-16','regular')}} className={`chair  ${data['o1-16']?'reserved':null}`}></div>
                <div id="o1-17" onClick={()=>{!data['o1-17'] && hadlePopup('o1-17','regular')}} className={`chair  ${data['o1-17']?'reserved':null}`}></div>
                <div id="o1-18" onClick={()=>{!data['o1-18'] && hadlePopup('o1-18','regular')}} className={`chair  ${data['o1-18']?'reserved':null}`}></div>
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
              <p className='nametag'>It should have been JobCloud</p>
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
                <p className='nametag'>JobCloud</p>
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
              <p className='nametag'>JobCloud</p>
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
              <div className="kitchen"><p className="dot">Coffee here is better</p>
              </div>
            </div>
            <div>
                <div className="wc"><div className="dot">Data for toilet will be done by other team on hackaton</div></div>
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
            <div>
            <div className="vuleta-scooter"></div>
        </div>
            <div>
            <div className="popcorn"></div>
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
                <div className="wc lower"><div className="dot">Data for toilet will be done by other team on hackaton</div></div>
            </div>
            <div>
            <div className="tabletennis"></div>
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
      {openPopup && (
        <Popup
            closePopup={() => {
                setOpenPopup(false);
            }}
        >
        {type==='regular'&& 
        <div className="popup-content">
            <p className="question">Dali zelite da rezervisete ovo mjesto?</p>
            <div className="actions">
                <button onClick={setReservation} className="accept">Da</button>
                <button onClick={()=>{setOpenPopup(false)}} className="decline">Ne</button>
            </div>
        </div>}
        </Popup>
    )}
        </>
    );
};

export default BookPage;
