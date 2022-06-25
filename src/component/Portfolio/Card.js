import React from 'react'
import './Portfolio.css'

const Card = ({ category, totalLike, title, image }) => {
  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={image} alt={title} className="card-img" />
        </div>
        <div className="category d_flex">
          <span>{category}</span>
          <label>
            <i className="far fa-heart">
              {totalLike}
            </i>
          </label>
        </div>
        <div className="title">
          <h2>{title}</h2>
          <a href="#popup" className='arrow'>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Card