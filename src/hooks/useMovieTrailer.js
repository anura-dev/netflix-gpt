import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    //fetch trailer video & updating the store with trailer video data
  
    useEffect(()=>{
        getMovieVideos();
    },[]);
  
    const getMovieVideos = async() =>{
      const data= await fetch('https://api.themoviedb.org/3/movie/'+ movieId + '/videos?language=en-US', API_OPTIONS);
      const json = await data.json();
  
      const filterTrailer = json.results.filter((video) => video.type === "Trailer");
      //if filter trailer has more trailer video then take 1st video or else take any videos from json results
      const trailer =  filterTrailer.length ? filterTrailer[0]: json.results[0];
      dispatch(addTrailerVideo(trailer));
  
    } 

}

export default useMovieTrailer;