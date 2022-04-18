import React from 'react'
import { KeyboardArrowUp } from '@mui/icons-material';
import { PersonOutlined } from '@mui/icons-material';
import './widget.scss'

const Widget = () => {
  return (
    <div className='widget'>
        <div className="left">
          <span className="title">USERS</span>
          <span className="counter">2134</span>
          <span className="link">See all users</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUp/>
            20%
          </div>

          <PersonOutlined className='icon'/>
        </div>
    </div>
  )
}

export default Widget