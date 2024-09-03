import React from 'react'
import Left from '../LeftComponent/Left'
import './Dashboard.css'
import Main from '../MainComponent/Main'

const Dashboard = () => {
  return (
    <>
    <div className='dashboard-container'>
      <div className='main-containers'>
      <Main/>
      </div>
      <div className='left-container'>
        <Left/>
      </div>
    </div>

    </>
  )
}

export default Dashboard
