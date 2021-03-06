import React, { useState } from 'react'
import '../Portfolio/Portfolio.css'

const Card = ({ date, title_one, desc_one, title_two, desc_two, title_three, desc_three, title, image }) => {
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
          <img src={image} alt={title} className="card-img" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{date} </span>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}> {title_one} </h2>
          <a href="#popup" className='arrow'>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* POPUP MODAL */}
      {modal && (
        <div className="modal modal-blog">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <div className="modal-img left">
              <img src={image} alt={title} />
            </div>
            <div className="modal-text right">
              <span>{date}</span>
              <h1>{title_one}</h1>
              <p>{desc_one}</p>

              <h1>{title_two}</h1>
              <p>{desc_two}</p>

              <h1>{title_three}</h1>
              <p>{desc_three}</p>


              <button className="btn_shadow close-modal" onClick={toggleModal}>
                <i className="fas fa-times"></i>
              </button>

              <div className="contact mtop">
                <h1>Leave a Reply</h1>

                <form className="blog_contact d_flex">
                  <div className="left">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Website' />
                    <button className="btn_shadow">SUBMIT NOW</button>
                  </div>

                  <div className="right">
                    <textarea cols="30" rows="12" placeholder='Comment'></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
