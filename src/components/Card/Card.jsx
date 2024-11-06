import React from 'react'
import './Card.scss'

const Card = ({name = "Скоро будет.." , img = "https://cdn.pixabay.com/animation/2023/08/15/07/22/07-22-02-443_512.gif", price , otziv}  ) => {
  return (
    <>
    <div className="card">
        <img src= {img}  alt="" />
        <h1> {name} </h1>
        <h2> {price} </h2>
        <p> {otziv} </p>
        <button>Купить</button>
    </div>
    </>
    )
}

export default Card