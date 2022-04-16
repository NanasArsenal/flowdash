import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import Widget from '../components/widgets/Widget'
import './home.scss'
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>

      <div className="homeContainer">
        <Navbar/> {/*Navbar Component*/}

        <div className="widgets">{/*Widget Component*/}
          <Widget/>{/*Widget Component*/}
          <Widget/>{/*Widget Component*/}
          <Widget/>{/*Widget Component*/}
          <Widget/>{/*Widget Component*/}
        </div>
      </div>
    </div>
  )
}

export default Home