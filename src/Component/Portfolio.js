import React from 'react';
import dataImage from '../data.json';

export default function Portfolio() {
  return (
    <React.Fragment>
      <div className="portfolio">
        <div className="container">
          <div className="row">
            <div className="heading">
              <h2 className="text-white">Portfolio</h2>
              <br />
              <div className="row row-cols-1 row-cols-md-3 g-4 position">
                {dataImage.map((element, key) => (
                  <div key={key} className="col">
                    <div className="card position-relative overflow-hidden image-hover-wrapper">
                      <img src={element.img} className="card-img-top" alt="img" />
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
              <button className='btn btn-warning btn-lg m-4'>View More</button>
            </div>
          </div>
        </div>
      </div >
      <div className='experiance'>
        <div className='container'>
        <div className='row'>
          <div className='col col-11'>
            <h2 className='text-white heading float-left'>Experiance</h2>
            <div className='heading paragraph-text'>   <span className='icon-circle'></span>
              <h4 className='text-white '>React Developer  </h4>
              <span className='icon-borderline'>
                <h6 className='text-white '>SO Infotech Company  </h6>
                <div className=' text-white paragraph-text'>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>
                </div>
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}
