import React from 'react'
import skillData from "../SkillsData.json"
export default function data() {
    return (
        <React.Fragment>
            <div id='main_skill'>
                <div className='container'>
                    <div className='row'>
                        <div className='heading'>
                            <h1> My Skills </h1>
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {
                                    skillData.map((element, key) => {
                                        return (
                                            <div key={key} className="col">
                                                <div className="card">
                                                    <img style={{height:144}} src={element.img} className="card-img-top" alt="img" />
                                                    <div className="card-body">
                                                        <p className="card-title">{element.Title}</p>
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
