import logo from './logo.svg';
import './App.scss';
import { Routes, Route, useLocation,useNavigate } from "react-router-dom";
import Home from "./Views/Home/Home";
import NotFound from "./Views/404/404";
import BookPage from "./Views/BookPage/BookPage";

const App = () => {

    return (
      <div className='container'>
        <Routes>
           <Route path="*" element={<NotFound/>} />
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/book" element={<BookPage/>} />
        </Routes>
      </div>
  );
}

export default App;
