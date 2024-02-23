import React from 'react'
import "./details.scss"
import useFetch from "../hooks/useFetch"
import { useParams } from 'react-router-dom'
import DetailsBanner from '../components/DetailsBanner'
import Cast from './Cast'
import VideosSection from './VideosSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'

export default function Details() {


  const { mediaType, id } = useParams()
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
  const { data : credits, loading : creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div>
      <DetailsBanner video = {data?.results?.[0]} crew = {credits?.crew}/>
      <Cast data = {credits?.cast} loading = {creditsLoading}/>
      <VideosSection data = {data} loading = {loading}/>
      <Similar mediaType={mediaType} id = {id}/>
      <Recommendation mediaType={mediaType} id = {id}/>
    </div>
  )
}