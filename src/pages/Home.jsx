import React from 'react'
import "./home.scss"
import HeroBanner from '../components/HeroBanner'
import Trending from './Trending'
import Popular from './Popular'
import TopRated from './TopRated'

export default function Home() {
  return (
    <div className='Homepage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      {/* <div className="test" style = {{height : '1000px'}}></div> */}
    </div>
  )
}
