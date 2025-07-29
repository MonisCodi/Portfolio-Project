import React from 'react';
import skillData from "../SkillsData.json"

export default function Portfolio() {
  return (
    <React.Fragment>
      <div id="main_portfolio">
        <div className="container">
          <div className="row">
            <div className="heading">
              <h1>Portfolio</h1>
              <div className="row row-cols-1 row-cols-md-3 g-4 position">
                {skillData.map((element, key) => (
                  <div key={key} className="col">
                    <div className="card position-relative overflow-hidden image-hover-wrapper">
                    <img style={{width:355, height:230}} src={element.img} className="card-img-top" alt="img" />
                      <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-white text-center">
                        <div>
                          <h5>{element.title || "Hovered Title"}</h5>
                          <p>{element.description || "Additional info on hover."}</p>
                          <button className='btn btn-danger btn-md'>More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           <div class="text-center">
  <button type="button" class="btn btn-lg btn-primary">View More</button>
</div>
            </div>
          </div>
        </div>
      </div >
    </React.Fragment >
  );
}
