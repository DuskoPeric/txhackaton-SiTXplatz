import "./BookPage.scss";
import React, { useState, useEffect, useCallback } from 'react';
import Popup from "../../components/popup/Popup";
import popup from "../../components/popup/Popup";

const BookPage = () => {

    const [openPopup, setOpenPopup] = useState(false);
    const [openJobCloud, setOpenJobCloud] = useState(false);
    const [openDusko, setDusko] = useState(false);
    const [direktorkaMessage, setDirektorkaMessage] = useState('');
    const [coords, setCoords] = useState({x: 0, y: 0});
    const [type, setType] = useState(null);
    const [chair, setChair] = useState(null);
    const [toilets, setToilets] =useState([]);
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

    const closePopup=()=> {
        setOpenPopup(false);
    }

    const handleJobCloud= (value) => {
        setOpenJobCloud(value)
        setOpenPopup(false)
    }

    const hadlePopup=(id,type)=>{
        setType(type);
        setChair(id);
        setOpenPopup(true)
    }

    const handleDusko = (value) =>{
        setOpenPopup(false)
        setDusko(value)
    }
    const jeleninePoruke=['Član 32', '...', 'Rezervišite parking', 'Vule(ta) dodji vamo', '...', 'Ukinućemo parking']
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * jeleninePoruke.length);
        setDirektorkaMessage(jeleninePoruke[index]);
    }, []);
    async function getToilets() {
        try {
            let response = await fetch('https://tos-svc.ricardo-dev.ch/gmt/tos/cabins');
            let responseJson = await response.json();
            // let cabins = responseJson.cabins;
            setToilets(responseJson);
            console.log(toilets)
            // return responseJson;
        } catch(error) {
            console.error(error);
        }
    }
    useEffect(() => {
        const handleWindowMouseMove = event => {
            setTimeout(()=> setCoords({
                x: event.clientX,
                y: event.clientY,
            }), 1000)

        };

        window.addEventListener('mousemove', handleWindowMouseMove);
        // setInterval(() => setDirektorkaMessage(jeleninePoruke[Math.floor(Math.random()*jeleninePoruke.length)]), 500)


        return () => {
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove,
            );
        };
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle]);
    useEffect(() => {
        getToilets();
    }, []);
    return (
        <>
            {/*<b style={{color: 'white', fontSize:50}}>{toilets}</b>*/}
        <div className="main-container">
        <div style={{left: coords.x, top: coords.y}} className="direktorka">

        <div className="poruka">
            {direktorkaMessage}

        </div>
    </div>
        {openDusko ?
            (<div className="dusko">
                <h2>ĐE ĆEŠ BA NA PORAZ</h2>
                <div className="slika"></div>
                <div className="kapituliraj" onClick={()=>{handleDusko(false)}}>Kapituliraj</div>
            </div>):null}
            {openJobCloud ?
                (
                    <div className="jobCloudOverlay">
                        <div className="headline-wrapper"><div>Sve uze</div><div className="jclogo"></div>
                        </div>
                        <div className="denied" onClick={()=>{handleJobCloud(false)}}>Rjeci ne Poslovnom oblaku</div>
                    </div>
                ):null}

        <div className="parkalot" onClick={()=>{hadlePopup('o1-1','parkalot')}}>Rezerviši parking</div>
        <div className="parkalot jelena" onClick={()=>{hadlePopup('o1-1','zalba')}}>Žali se Jeleni</div>
        <div className="parkalot jobCloud" onClick={()=>{hadlePopup('o1-1','JobCloud')}}>Svaki kanc JobCloud-u</div>
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
            <div className="office horizontal wall-left big3 homegate">
                <div className='homgejtovaca'>
                    <h2>Živeli</h2>
                </div>
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
              <p className='nametag'>SMG PREUZEO OD JOBCLOUD-a</p>
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
                <div className="cigara"></div>
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
                <div className="wc"><div className="dot">
                    {toilets.length > 0 ? toilets[0].cabins.map(x => {
                        return <div> <div className="wc-info"><p>{x?.cabin}</p> <div style={{width: 10, height: 10, borderRadius: 50, marginLeft: 10, backgroundColor: x?.status === "FREE" ? 'green' : 'red'}}></div></div></div>
                    }) : <div>Ne postoji info</div>}
                </div>
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
                <div className="printer" onClick={()=>{hadlePopup('o1-1','vesna')}}></div>
            </div>
            <div>
            <div className="ps5">
                <div className="arnidrobke">
                    <h2>Punih 8 sati rada</h2>
                </div>
            </div>
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
                <div className="wc lower"><div className="dot">
                    {toilets.length > 0 ? toilets[2].cabins.map(x => {
                        return <div> <div className="wc-info"><p>{x?.cabin}</p> <div style={{width: 10, height: 10, borderRadius: 50, marginLeft: 10, backgroundColor: x?.status === "FREE" ? 'green' : 'red'}}></div></div></div>
                    }) : <div>Ne postoji info</div>}
                </div>

                </div>
            </div>
            <div className="vuleta-scooter" onClick={()=>{hadlePopup('o1-1','scooter')} }>
            <div className="dot vs">Vuleta dosao trotinetom</div>
        </div>
        <div>
        <div className="popcorn" onClick={()=>{hadlePopup('o1-1','popcorn')} }></div>
    </div>
    <div>
    <div className="wc small"><div className="dot">
        {toilets.length > 0 ? toilets[1].cabins.map(x => {
            return <div> <div className="wc-info"><p>{x?.cabin}</p> <div style={{width: 10, height: 10, borderRadius: 50, marginLeft: 10, backgroundColor: x?.status === "FREE" ? 'green' : 'red'}}></div></div></div>
        }) : <div>Ne postoji info</div>}
    </div></div>
</div>
            <div>
            <div className="tabletennis" onClick={()=>{hadlePopup('o1-1','tennis')}}>

            </div>
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
            <div className="office horizontal wall-left big3" onClick={()=>{hadlePopup('o1-1','rezervisiKanc')}}>
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
            <div className="office horizontal wall-left big2-2 ziletov-office">
                <div className='zile'>
                    <h2>DA,A ?</h2>
                </div>
              <div className="chair-column long2 ">
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
            <div className="kitchen large">
                <div className="aleksandra" onClick={()=>{hadlePopup('o1-1','aleksandra')}}>

                </div>
            </div>
          </div>
          <div>
          <div className="terasa2">
              <div className="cigara"></div>
          </div>
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
            <p className="question">Da li želite da rezervišete ovo mjesto?</p>
            <div className="actions">
                <button onClick={setReservation} className="accept">Da</button>
                <button onClick={()=>{setOpenPopup(false)}} className="decline">Ne</button>
            </div>
        </div>}
            {type==='aleksandra'&&
                <div className="popup-content">
                    <p className="question">Kontaktirajte Aleksandru da sredi kafe aparat?</p>
                    <div className="actions">
                        <button onClick={setReservation} className="accept">Da</button>
                        <button onClick={()=>{setOpenPopup(false)}} className="decline">Ne</button>
                    </div>
                </div>}
            {type==='vesna'&&
                <div className="popup-content">
                    <p className="question">Za štampanje vam je potrebna Vjesna, kontaktirajte Vjesnu</p>
                    <div className="actions">
                        <a href="tel:0604118298"><button onClick={setReservation} className="accept">Pozovi Vjesnu</button></a>
                        <button onClick={()=>{setOpenPopup(false)}} className="decline">Ne</button>
                    </div>
                </div>}
            {type==='JobCloud'&&
                <div className="popup-content">
                    <p className="question">JobCloud ima posjetu iz Švice, treba im ceo sprat</p>
                    <div className="actions">
                        <button onClick={()=>{handleJobCloud(true)}} className="accept">Rezerviši</button>
                        <button onClick={()=>{setOpenPopup(false)}} className="decline">Ne</button>
                    </div>
                </div>}
            {type==='tennis'&&
                <div className="popup-content">
                    <p className="question">Želiš igrat tjenisa sa Duškom</p>
                    <div className="actions">
                        <button onClick={()=>{handleDusko(true)}} className="accept">Jašta</button>
                        <button onClick={()=>{setOpenPopup(false)}} className="decline">Ne</button>
                    </div>
                </div>}
            {type==='popcorn'&&
                <div className="popup-content">
                    <p className="question">Kokaće Žile</p>
                    <div className="actions">
                        <button onClick={()=>{closePopup(false)}} className="accept">Kokaj</button>
                        <button onClick={()=>{setOpenPopup(false)}} className="decline">Ne</button>
                    </div>
                </div>}
            {type==='parkalot'&&
                <div className="popup-content">
                    <p className="question">Stani đe stigneš</p>
                    <div className="actions">
                        <button onClick={()=>{closePopup(false)}} className="accept">Plaky</button>
                    </div>
                </div>}

            {type==='zalba'&&
                <div className="popup-content">
                    <p className="question">Vi ste trenutno 46. u redu za žalbe</p>
                    <div className="actions">
                        <button onClick={()=>{closePopup(false)}} className="accept">Da, a ?</button>
                    </div>
                </div>}
            {type==='scooter'&&
                <div className="popup-content">
                    <p className="question">Javi Vuleti da si pozajmio trotinet</p>
                    <div className="actions">
                        <button onClick={()=>{closePopup(false)}} className="accept">M(arni)</button>
                    </div>
                </div>}
            {type==='rezervisiKanc'&&
                <div className="popup-content">
                    <p className="question">Za koji tim želite da bukirate kanc?</p>
                    <div className="actions">
                        <button onClick={()=>{closePopup(false)}} className="accept">JobCloud</button>
                    </div>
                </div>}

        </Popup>
    )}
        </>
    );
};

export default BookPage;
