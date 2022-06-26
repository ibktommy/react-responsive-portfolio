import React, { useState } from 'react'
import './Portfolio.css'

const Card = ({ category, totalLike, title, image }) => {
  //Seting UseState Hook
  const [modal, setModal] = useState(false)

  // Function to Update "modal" state
  function toggleModal() {
    setModal(!modal)
  }

  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={image} alt={title} className="card-img" onClick={toggleModal}/>
        </div>
        <div className="category d_flex">
          <span>{category} onClick={toggleModal}</span>
          <label>
            <i className="far fa-heart">
              {totalLike}
            </i>
          </label>
        </div>
        <div className="title">
          <h2>{title} onClick={toggleModal}</h2>
          <a href="#popup" className='arrow'>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Card
