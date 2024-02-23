import React, { useState } from 'react'
import ContentWrapper from '../components/ContentWrapper'
import SwitchTab from '../components/SwitchTab'
import useFetch from '../hooks/useFetch'
import Carousel from '../components/Carousel';
// import "./home.scss"

export default function TopRated() {

    const [endpoint , setEndpoint] = useState("movie");
    const {data,loading} = useFetch(`/${endpoint}/top_rated`)

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    }

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">
                Top Rated
            </span>
            <SwitchTab data = {["Movies" , "TV Shows"]} onTabChange = {onTabChange}/>
        </ContentWrapper>
        <Carousel data = {data?.results} loading = {loading} endpoint={endpoint}/>
    </div>
  )
}
