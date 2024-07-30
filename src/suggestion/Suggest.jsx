import React from 'react'
import "./Suggest.css"
import SearchIcon from '@mui/icons-material/Search';

const Suggest = () => {
  return (
    <div className='suggest'>
      <div className="search-input-box">
        <div className="suggest_input">
          <SearchIcon className='search_icon' />
          <input type="text" placeholder='Search' />
        </div>
      </div>

      <div className="suggest_container">
        <h2>What's happening</h2>

 
 
         <div className="add_content">
          <img src="./src/assets/3.jpg" />
          <p>Captian America New 2024 <br />
            <span>Marvel 2024 Live</span> </p>
        </div>
        <div className="hastags">
          <h3>#ShareDotMarket</h3>
          <p>0 Brokerage on F&o & Equity on Share.Market <br />till 31st Dec.Install Now. <br /> <span>promoted by Share.Market</span>
          </p>
        </div>

        <div className="hastags2">
          <p className="header">Politics.Trending</p>
          <h3>#ShareDotMarket</h3>
          <h5>20.9k posts</h5>
        </div>

        <div className="hastags2">
          <p className="header">Politics.Trending</p>
          <h3>Disappointing</h3>
          <h5>20.9k posts</h5>
        </div>
        <div className="hastags2">
          <p className="header">Entertainment.Trending</p>
          <h3>Lady Deadpool</h3>
          <h5>20.9k posts</h5>
        </div>
      </div>



       <div className="suggest_container">
        <h2>Trending !</h2>
          <div className="add_content">
            <img src="./src/assets/1.jpg" />
            <p>Batman New 2024 <br />
            <span>DC 2024 Live</span> </p>
          </div>
          <div className="hastags">
            <h3>#movie</h3>
            <p>Book your tickets for Raayan.Movie <br />till 26th july.Watch Now. <br /> <span>promoted by Indian.Movie</span>
            </p>
          </div>

          <div className="hastags2">
            <p className="header">Sports.Trending</p>
            <h3>#indiancricket</h3>
            <h5>20.9k posts</h5>
          </div>

          <div className="hastags2">
            <p className="header">Entertainment.Trending</p>
            <h3>Deadpool vs wolverine</h3>
            <h5>20.9k posts</h5>
          </div>
      </div> 
    </div>
  )
}

export default Suggest