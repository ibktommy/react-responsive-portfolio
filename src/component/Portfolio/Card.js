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

      {/* POPUP MODAL */}
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content d_flex">
              <div className="modal-img left">
                <img src={image} alt={title} />
              </div>
              <div className="modal-text right">
                <span>Featured - Design</span>
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas incidunt, sint nisi aspernatur assumenda?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam fuga maxime quo.</p>
                <div className="button f_flex mtop">
                  <button className="btn_shadow">
                    LIKE THIS <i className='far fa-thumbs-up'></i>
                  </button>
                  <button className="btn_shadow">
                    VIEW PROJECT <i className='fas fa-chevron-right'></i>
                  </button>
                </div>
                <button className="close-modal btn">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
