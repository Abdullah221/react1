import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideOptionL from './sideOptionL.jsx'
import './LayoutDesign.css'
import Search from './search.jsx';
import MainMenu from './MainMenu.jsx';
import logo from './img/brandLogo.png';
import searchIcon from './img/searchIcon.png';
import homeIcon from './img/homeIcon.png';
import marketPlace from './img/marketPlace.png';
import Post from './post.jsx';
import moreIcon from './img/more_7588807.png'
import closeIcon from './img/close_13569946.png'
import Button from "./postButton.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <div className="container-fluid header">
        <div className="row">

          <div className="col-3 d-flex">
            <img src={logo} alt="brandLogo" className='brandLogo' />
            <Search icon = {searchIcon} />
          </div>
          <div className="col-6 text-align-center d-flex justify-content-center">
            <MainMenu href="https://www.google.com" img={homeIcon} />
            <MainMenu href="https://www.facebook.com" img={marketPlace} />
            <MainMenu href="https://www.tanzeem.org" img={homeIcon} />
            <MainMenu href="https://www.youtube.com" img={marketPlace} />
          </div>
          <div className="col-3 d-flex justify-content-end">
            <MainMenu href="" img={homeIcon} />
            <MainMenu href="" img={marketPlace} />
            <MainMenu href="" img={homeIcon} />
            <MainMenu href="" img={marketPlace} />
          </div>
          
        </div>
    </div>

    <div className="container-fluid mainPage">
      <div className="row">
        <div className="col-3 d-flex flex-column sideColumn">
          <SideOptionL icon={logo} option="Option1" />
          <SideOptionL icon={logo} option="Option2" />
          <SideOptionL icon={logo} option="Option3" />
          <SideOptionL icon={logo} option="Option4" />
          <SideOptionL icon={logo} option="Option5" />
          <SideOptionL icon={logo} option="Option6" />
          <SideOptionL icon="" option="Option7" />
          <SideOptionL icon="" option="Option8" />
          <SideOptionL icon="" option="Option9" />
          <SideOptionL icon="" option="Option10" />
          <SideOptionL icon="" option="Option11" />
          <SideOptionL icon="" option="Option12" />
          <SideOptionL icon="" option="Option13" />
          <SideOptionL icon="" option="Option14" />
          <SideOptionL icon="" option="Option15" />
          <SideOptionL icon="" option="Option16" />
          <SideOptionL icon="" option="Option17" />
          <SideOptionL icon="" option="Option18" />
        </div>
        <div className="col-6 text-align-center d-flex justify-content-center ">
          <div className="postSection">
          <Post userImg={logo} alt="img" userID="Facebook" timeP="1 min" icon1={moreIcon} icon2={closeIcon} postImg={logo} postAlt="postImg"  />
          <Post userImg={homeIcon} alt="img" userID="Mohsin" timeP="5hrs" icon1={moreIcon} icon2={closeIcon} postImg={logo} postAlt="postImg"  />
          <Post userImg={marketPlace} alt="img" userID="Hashim" timeP="36 min" icon1={moreIcon} icon2={closeIcon} postImg={logo} postAlt="postImg"  />
          </div>
        </div>
        <div className="col-3 d-flex flex-column sideColumn">
          <SideOptionL icon="" option="Option1" />
          <SideOptionL icon="" option="Option2" />
          <SideOptionL icon="" option="Option3" />
          <SideOptionL icon="" option="Option4" />
          <SideOptionL icon="" option="Option5" />
          <SideOptionL icon="" option="Option6" />
          <SideOptionL icon="" option="Option7" />
          <SideOptionL icon="" option="Option8" />
          <SideOptionL icon="" option="Option9" />
          <SideOptionL icon="" option="Option10" />
          <SideOptionL icon="" option="Option11" />
          <SideOptionL icon="" option="Option12" />
          <SideOptionL icon="" option="Option13" />
          <SideOptionL icon="" option="Option14" />
          <SideOptionL icon="" option="Option15" />
          <SideOptionL icon="" option="Option16" />
          <SideOptionL icon="" option="Option17" />
          <SideOptionL icon="" option="Option18" />
        </div>
      </div>
    </div>
    </>
  </React.StrictMode>,
)
