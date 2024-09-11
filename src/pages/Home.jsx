import React from 'react'
import withSidebar from '../HOC/withSidebar';

const Home = () => {
  return (
    <div>
        Welcome to Home page
    </div>
  )
}

export default withSidebar(Home)