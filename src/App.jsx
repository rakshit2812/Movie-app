import { useEffect, useState } from "react";
import { fetchDatafromAPI } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getAPIconfiguration, getGenres } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import SearchResult from "./pages/SearchResult";
import Explore from "./pages/Explore";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [bollywood , Setbollywood] = useState(false);
  const [latest , Setlatest] = useState(false);
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDatafromAPI("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getAPIconfiguration(url));
    });
  };

  const genresCall = async() => {
    let promises = [];
    let endPoints = ["tv" , "movie"];
    let allGenres = {}

    endPoints.forEach((url) => {
      promises.push(fetchDatafromAPI(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return genres.map((item) => {
        allGenres[item.id] = item
      })
    })
    dispatch(getGenres(allGenres))
  };
  
  return (
    <BrowserRouter>
      <Header Setbollywood = {Setbollywood} Setlatest = {Setlatest}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore bollywood={bollywood} latest = {latest}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


// git clone hhttps://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git
// cd developer-portfolio
