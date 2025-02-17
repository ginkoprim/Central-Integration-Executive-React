import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Central Integration Executive</title>
        <meta property="og:title" content="Central Integration Executive" />
      </Helmet>
    </div>
  )
}

export default Home
