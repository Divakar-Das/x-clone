import React from 'react'
import "./Sidenav.css"
import XIcon from '@mui/icons-material/X';
import Sideoption from './Sideoption';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PendingIcon from '@mui/icons-material/Pending';

const Sidenav = () => {
  return (
    <div className='sidenav'>
       {/* X icon */}
       <div className="x-icon"><XIcon fontSize='large' className='x--icon' /></div>

        <Sideoption  Icon={HomeIcon} text="Home"/>
        <Sideoption  Icon={SearchIcon} text="Explore"/>
        <Sideoption  Icon={NotificationsNoneIcon} text="Notifications"/>
        <Sideoption  Icon={MailOutlineIcon} text="Messages"/>
        <Sideoption  Icon={BookmarkBorderIcon} text="Bookmarks"/>
        <Sideoption  Icon={PeopleOutlineIcon} text="Communities"/>
        <Sideoption  Icon={PermIdentityIcon} text="Profile"/>
        <Sideoption  Icon={PendingIcon} text="More"/>

        <button className="sidenav_btn">Post</button>
    </div>
  )
}

export default Sidenav