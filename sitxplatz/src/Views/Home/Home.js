

import "./Home.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/txwhite.png";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='body'>

            <span className="top">
                <img src={logo} />
            </span>
            <span className="right"><img src={logo} /></span>
            <span className="bottom"><img src={logo} /></span>
            <span className="left"><img src={logo} /></span>
            <div className="home-container">
                <div className="logo">
                    SiTXplatz
                </div>
                <div className='home-wrapper'>
                    <div className="login-form"  onClick={() => {
                        navigate("/book");
                    }}>
                        Sign with Vuleta SSO
                    </div>

                    <div className="vuleta"
                    ></div>
                </div>
                <div className="footer">
                    Colaboration project by Homegate & JobCloud
                </div>
            </div>
        </div>

    );
};

export default Home;
