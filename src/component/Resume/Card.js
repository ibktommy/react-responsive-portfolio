import React from 'react'

const Card = ({ category, title, desc, rate , year}) => {
  return (
    <>
      <div className="box box_shadow">
        <div className="title_content d_flex">
          <div className="title">
            <h2>{title}</h2>
            <span>{year}</span>
          </div>

          <div className="rate">
            <button className="btn_shadow">
              {rate}
            </button>
          </div>
        </div> 
        <hr />
        <p>{desc}</p>
      </div> 
    </>
  )
}

export default Card