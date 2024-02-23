import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";

const TMBD_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTIyMDBiMzk5ZjNhMWM0MDBmOWRmZWE3ZjhkOGUxZCIsInN1YiI6IjY1ZDE5MTI5NzdjMDFmMDE2MzBlYjFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xGoALGlgbuQHZrAV5YHN0YbfkTssn0rfsycxhsFjvDg"

const headers = {
    Authorization : "bearer " + TMBD_TOKEN
}

export const fetchDatafromAPI = async(url,params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}