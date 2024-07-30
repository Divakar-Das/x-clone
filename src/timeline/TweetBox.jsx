import React, { useState } from 'react';
import "./TweetBox.css";
import db from '../firebase';

const TweetBox = () => {

  const [tweetMsg, setTweetMsg] = useState("");
  const [tweetimage,settweetImage]=useState("");
  const sendTweet = (e) => {
    e.preventDefault();
  

    db.collection("posts").add({
      displayName: 'john wick',
      username: 'john_wick_07',
      verified: true,
      text: tweetMsg,
      image:tweetimage,
      //"https://farm4.staticflickr.com/3224/3081748027_0ee3d59fea_z_d.jpg",
      avatar: "https://i.imgur.com/OB0y6MR.jpg",
      link:"johnn_07",
    });
    
    setTweetMsg("");
    settweetImage("");
  };
  return (
    <div className='tweetbox'>
      <form>
        <div className="tweet_input">
          <img src="./src/assets/1.jpg" name="profile_img" />
          <input
            onChange={(e)  => setTweetMsg(e.target.value)}
            value={tweetMsg}
            type="text"
            placeholder="What is happening?!"
         />
        </div>
        <div className="tweet-button">
          <input 
          type="text"
          value={tweetimage}
          onChange={(e)=> settweetImage(e.target.value)}
          placeholder='Enter image url: '
          />
          {/* <input type="file" name="" accept='image/*' /> */}
          <button type="submit" onClick={sendTweet} className='tweetbox-btn'>Post</button>
        </div>
      </form>
    </div>
  )
}

export default TweetBox