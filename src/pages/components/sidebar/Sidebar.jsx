import React from 'react'
import './sidebar.scss';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PersonIcon from '@mui/icons-material/Person';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded'; 
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LeaderboardSharpIcon from '@mui/icons-material/LeaderboardSharp';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import PsychologySharpIcon from '@mui/icons-material/PsychologySharp';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>Flow Admin</span>
        </div>
 
        <div className="center">
            <ul>
              <p className="title">MAIN</p>
                <li>
                  <GridViewRoundedIcon className='icon'/> 
                   <span className='list-item'>Dashboard</span> 
                </li>
              <p className="title">LISTS</p>
                <li>
                   <PersonIcon className='icon'/> 
                   <span className='list-item'>Users</span> 
                </li>
                
                <li>
                   <Inventory2Icon className='icon'/>
                   <span className='list-item'>Products</span> 
                </li>
                
                <li>
                   <InventoryRoundedIcon className='icon' />       
                     <span className='list-item'>Orders</span> 
                </li>
                
                <li>
                <LocalShippingIcon className='icon'/>
                   <span className='list-item'>Delivery</span> 
                </li>
                <p className="title">USEFUL</p>
                <li>
                <LeaderboardSharpIcon className='icon'/>
                   <span className='list-item'>Stats</span> 
                </li>


                <li>
                  <NotificationsRoundedIcon className='icon'/> 
                   <span className='list-item'>Notifications</span> 
                </li>
            
            
            {/*Service Links  */}
                <p className="title">SERVICE</p>

                <li>
                <PsychologySharpIcon className='icon'/>
                   <span className='list-item'>Logs</span> 
                </li>


                <li>
                <FavoriteSharpIcon className='icon'/>
                   <span className='list-item'>System Health</span> 
                </li>

            {/*user Links  */}
            <p className="title">USERS</p>

                <li>
                <AccountCircleIcon className='icon'/>
                   <span className='list-item'>Profile</span> 
                </li>

                <li>
                <SettingsIcon className='icon'/>
                   <span className='list-item'>Settings</span> 
                </li>

                <li>
                <LogoutIcon className='icon'/>
                   <span className='list-item'>Logout</span> 
                </li>
            </ul>
        </div>
{/*color options*/}
        <div className="bottom">
           <div className="colorOptions"></div>
           <div className="colorOptions"></div>
        </div>
    </div>
  )
}

export default Sidebar