import React, { useEffect, useRef, useState } from 'react'
import Styles from './Titlecards.module.css'
import cards_data from '../../assets/cards/Cards_data'

const Titlecards = (props) => {
  const cardsRef = useRef();
  const [apiData , setApiData]=useState([]);
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQ4MTM2Mzc0OTk3OGE1NDVhYTIyNzgxN2Y1NzQ3MyIsIm5iZiI6MTc1NjU2MjAwMy4xNDksInN1YiI6IjY4YjMwMjUzYTJjZDc3NmZmMzNlZmEzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1zYnTk8aPccMGOx_sMGM2aOavQxlMJ-06RNlZauiaeY'
  }
  };
  const handleWheel = (event) =>{
    event.preventDefault();
    cardsRef.current.scrollLeft +=event.deltaY;
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${props.category?props.category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel)
  },[])

  return (
    <div className={Styles.title_cards}>
      <h1>{props.title?props.title:"Popular on Netflix"}</h1>
      <div className={Styles.card_list} ref={cardsRef}>
        {apiData.map((card , i)=>{
          return <div className={Styles.card} key={i}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Titlecards