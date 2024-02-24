import React, { useEffect, useState } from "react";
import "./herobanner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "./Img";
import ContentWrapper from "./ContentWrapper";

export default function HeroBanner() {
  const [background, SetBackground] = useState("");
  const [query, Setquery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      "https://image.tmdb.org/t/p/original" +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    SetBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {

    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const ClickHandle = () => {
    navigate(`/search/${query}`);
  }

  return (
    <div className="herobanner">
      {!loading && <div className="background-img">
        <Img src={background} />
      </div>}
      <div className="opacity-layer">
        
      </div>
      <ContentWrapper>
        <div className="bannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => Setquery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button onClick={ClickHandle}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
