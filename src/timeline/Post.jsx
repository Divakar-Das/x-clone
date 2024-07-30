import React from 'react'
import "./Post.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import UploadIcon from '@mui/icons-material/Upload';


const Post = ({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
    links }) => {
    return (
        <div className='post'>
            <div className="post_img">
               <img src={avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_header_text">
                        <p>{displayName}
                            {" "}
                            <span> 
                               {verified && <VerifiedIcon className="post-badge" />}{username}
                            </span>
                        </p>
                    </div>

                    <div className="post_headerdisp">
                        <p>{text}</p>
                        <p className='links'>{links}</p>
                    </div>
                </div>
              { image &&  <img src={image} />}
                <div className="post_foot">
                    <ChatBubbleOutlineIcon fontSize='small' className='message' />
                    <RepeatIcon fontSize='small'  className='message-green' />
                    <FavoriteBorderIcon fontSize='small'  className='message-like'/>
                    <EqualizerIcon fontSize='small'  className='message' />
                    <TurnedInNotIcon fontSize='small' className='message' />
                    <UploadIcon fontSize='small' className='download-btn message' />
                </div>
            </div>
        </div>
    )
}

export default Post