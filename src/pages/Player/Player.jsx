import React, { useEffect, useState  } from 'react'
import Styles from './Player.module.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import {useNavigate, useParams} from 'react-router-dom'

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [apiData , setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  });
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQ4MTM2Mzc0OTk3OGE1NDVhYTIyNzgxN2Y1NzQ3MyIsIm5iZiI6MTc1NjU2MjAwMy4xNDksInN1YiI6IjY4YjMwMjUzYTJjZDc3NmZmMzNlZmEzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1zYnTk8aPccMGOx_sMGM2aOavQxlMJ-06RNlZauiaeY'
  }
};
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  return (
    <div className={Styles.player}>
      <img onClick={()=>{navigate(-2)}} src={back_arrow_icon} className={Styles.img} alt="" />
      <iframe  width='90%' height='90%' frameBorder="0"
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' allowFullScreen></iframe>
      <div className={Styles.player_info}>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player