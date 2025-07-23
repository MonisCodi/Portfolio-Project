import React from 'react'
import skillData from "../SkillsData.json"
export default function data() {
    return (
        <React.Fragment>
            <div className='skills'>
                <div className='container'>
                    <div className='row'>
                          <div className='heading'>
                            <h2  className='text-white'> My Skills </h2>
                  <br/>
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                            {
                                skillData.map((element, key) => {
                                    return (
                                        <div key={key} class="col">
                                            <div class="card">
                                                <img style={{width:259, height:144}} src={element.img} class="card-img-top" alt="img" />
                                                <div class="card-body">
                                                    <h5 class="card-title">{element.Title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                         </div>
                </div>

            </div>
        </React.Fragment>
    )
}
