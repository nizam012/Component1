import React from 'react'
import img from '../Image/img1.png'

function Component() {
    return (
        <div>
            <div className="container d-flex justify-content-center ">
                <div className="content-flex">
                    <div className="header ">
                        <h3 className='header1'>Why Leading SAFe Certification Training ?</h3>

                        <hr />
                        <p className='Content'>Nowadays, most of the companies are looking for SAFe certified professionals, as SAFe certified professionals can easily and rapidly adapt to the Agile transformation in an organization. So, irrespective of whether you want to get promoted in your current organization or you want to get a new job, you must acquire SAFe Agilist certification that is globally recognized and adds great value to your profile and will certainly enhance your career.</p>
                    </div>
                    <div className="footer d-flex justify-content-between">
                        <div className="img">
                            <img src={img} width={400} alt="" />
                        </div>
                        <div className="container1">
                            <div className="f-content p-2 m-2 ">
                                <div className="btn d-flex justify-content-between m-2">
                                    <button  className="bt text-uppercase">Benefits</button>
                                    <button  className="bt1 text-uppercase">How Organisations Benefits</button>
                                </div>
                            </div>
                            <div className="list mx-5">
                                <ul>
                                    <li>Gain a competitive edge over your peers</li>
                                    <li>Build professional credibility and increase your earning potential</li>
                                    <li>Grab more career opportunities</li>
                                    <li>Keep up with the fast-changing market trends</li>
                                    <li>Enhances the skill set and knowledge you currently possess</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Component
