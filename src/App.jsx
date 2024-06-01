
import './App.css'
const props = {

}
function App(props) {

  return (
    <>
      <div className='page'>
        <header className='d-flex'>
          <div className="logo d-flex">
            <img src="" alt="" />
            <div className="search d-flex">
              <img src="" alt="searchIcon" />
              <input type="text" placeholder='search here' />
            </div>
          </div>
          <div className="mainMenu d-flex">
            <a href=""><img src="" alt="Home" /></a>
            <a href=""><img src="" alt="Video" /></a>
            <a href=""><img src="" alt="MarketPlace" /></a>
            <a href=""><img src="" alt="UserID" /></a>
            <a href=""><img src="" alt="Games" /></a>
          </div>
          <div className="sideMenu d-flex">
            <a href=""><img src="" alt="MoreMenu" /></a>
            <a href=""><img src="" alt="Messanger" /></a>
            <a href=""><img src="" alt="Notification" /></a>
            <a href=""><img src="" alt="UserID" /></a>
          </div>
        </header>
        <div className="mainPage d-flex">
          <div className="moreOption">
            <div className="option d-flex">
              <img src="" alt="icon" />
              <h4>Option Number 1</h4>
            </div>
          </div>
          <div className="Posts">
            {/*  */}
            <div className='Post'>
        <div className='Header'>
          <div className='profilePhoto'>
            <img src="" alt="profileImg" />
          </div>
          <div className="profileData">
            <h5>User ID: {props.idName}</h5>
            <p>Post Time: {props.postTime}</p>
          </div>
          <div className='moreIcon'>
            <img src={props.moreIcon} alt="moreIcon" />
            <img src={props.cancelIcon} alt="cancelIcon" />
          </div>
        </div>
        <div className="mainContent">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid nesciunt minima ad aliquam doloremque unde quibusdam qui veritatis nisi.</p>
          <div className="postImg">
            <img src={props.postImg} alt="postImg" />
          </div>
        </div>
        <div className="postFooter">
          <button>Like</button><button>Comment</button><button>Share</button>
        </div>
      </div>
            {/*  */}
          </div>
          <div className="rightSideOptions">
            <div className="option d-flex">
              <img src="" alt="icon" />
              <h4>Option Number 1</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
