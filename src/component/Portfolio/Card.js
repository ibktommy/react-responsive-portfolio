import React from 'react'

const Card = ({ category, totalLike, title, image }) => {
  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={image} alt={title} />
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