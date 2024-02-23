import React, { useState } from 'react'
import ContentWrapper from '../components/ContentWrapper'
import SwitchTab from '../components/SwitchTab'
import useFetch from '../hooks/useFetch'
import Carousel from '../components/Carousel';
// import "./home.scss"

export default function Trending() {

    const [endpoint , setEndpoint] = useState("day");
    const {data,loading} = useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week")
    }

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">
                Trending
            </span>
            <SwitchTab data = {["Day" , "Week"]} onTabChange = {onTabChange}/>
        </ContentWrapper>
        <Carousel data = {data?.results} loading = {loading}/>
    </div>
  )
}
