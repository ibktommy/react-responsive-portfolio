import React from 'react'
import testimonialData from './TestimonialData'
import './Testimonial.css'

const Slide = ({ id, image, design, name, role, post, date, desc, valueIndex, index }) => {

  let position = "nextSlide"
  
  if(valueIndex === index) {
    position = "activeSlide"
  }

  if (valueIndex === index -1 || (index === 0 && valueIndex === testimonialData.length - 1)) {
    position = "lastSlide"
  }


  return (
    <>
      <article className={`d_flex ${position}`} key={id}>
        <div className="left box_shadow">
          <div className="img">
            <img src={image} alt={name} className='slider-img' />
          </div>
          <div className="details">
            <span>{design}</span>
            <h2>{name}</h2>
            <label htmlFor="#">{role}</label>
          </div>
        </div>

        <div className="right">
          <div className="icon">
            <div className="quote">
              <i className="fa fa-quote-right" ></i>
            </div>
          </div>

          <div className="content box_shadow mtop">
            <h1>{post}</h1>
            <h3>{date}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </article>
    </>
  )
}

export default Slide