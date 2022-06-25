import React from 'react'
import './Portfolio.css'
import projects from './PortfolioData'
import Card from "../Portfolio/Card";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio top" id="porfolio">
        <div className="container">
          <div className="heading text-center">
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className="content grid">
            {
              projects.map(({ id, ...props }) => {
                return <Card key={id} {...props} />;
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio