import React from 'react'
import { SearchOutlined } from '@mui/icons-material';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
         
          <div className="search">
            <input type="text" placeholder='Search..'/>
            <SearchOutlined/>
          </div>

          <div className="items">
            
            <div className="item">
              <LanguageOutlinedIcon className='icon'/>
              English
            </div>


            <div className="item">
              <DarkModeOutlinedIcon  className='icon'/>
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <ListOutlinedIcon  className='icon'/>
            </div>



          </div>
      </div>
    </div>
  )
}

export default Navbar