import React, { useEffect, useState } from 'react'
import "./Timeline.css"
import TweetBox from './TweetBox'
import Post from './Post'
import db from '../firebase'

const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe =
      db.collection('posts').onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => doc.data()))
      ));

    return () => unsubscribe();
  }, [])

  return (
    <div className='timeline'>
      <div className="inner-menu">
        <p>For you</p>
        <p>Following</p>
      </div>
      <TweetBox />

      {posts.map(post => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          links={post.links}
        />
      ))}

      <Post
          displayName='Marvel'
          username='marvel2.0'
          verified='true'
          text='Ironman is return....!!!!
          Even those who die at the age of ten naturally have the seasons of ten, have flowers, and leave behind seeds'
          avatar='src/assets/3.jpg'
          image='src/assets/ironman.jpeg'
          links='#ironman  #RDJ'
        />
        
    </div>
  );
}

export default Timeline