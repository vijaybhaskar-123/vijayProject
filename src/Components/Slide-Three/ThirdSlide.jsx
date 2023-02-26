import React from 'react'
import { circle, graphTWO } from '../../images';
import './ThirdSlide.css';

const ThirdSlide = () => {
    return (
        <div className='view-container-2'>
            <div className="view-report">
                <h1>View Report</h1>
                <div className="view-info">
                    <p>Patient Name : <span>David Allen</span></p>
                    <p>Date Uploaded : <span>04/28/2018 16:05:51</span></p>
                    <button><i class="fa-solid fa-upload"></i> <p>Download PDF</p></button>
                </div>
            </div>
            <div className="graph">
                <img src={graphTWO} alt="graph" width='1400px' height='250px' />
            </div>
            <hr />
            <div className="ltm">
                <div>
                    <h1>LTMK3728373</h1>
                    <div className="con-ref">
                        <div>
                            <p>Refresh</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                            </svg>
                        </div>
                        <div className="vert-line"></div>
                        <div>
                            <p>Connected</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16" style={{color:'green'}}>
                                <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={circle} alt="circle" width='150px' height='150px' />
                </div>
                <hr />

                <div className='margin-3-layer'>
                    <div className="info-layer">
                        <h1>Diane Cooper</h1>
                        <a href='#'>diane.cooper@example.com</a>
                    </div>
                    <div className="info-duration">
                        <div className="past">
                            <h2>15</h2>
                            <p>Past</p>
                        </div>
                        <div className="line"></div>
                        <div className="upcoming">
                            <h2>02</h2>
                            <p>Upcoming</p>
                        </div>
                    </div>
                </div>

                <div className="lins"></div>

                <div className="legends-new">
                    <h4>LEGENDS</h4>
                    <p>PVC - Premature ventricular contractions</p>
                    <p>PAC - Preoperative Aspiration Culture</p>
                    <p>Second Degree - Second Degree Type-1/type-2</p>
                    <p>NB - Noise On Beat</p>
                </div>
            </div>
        </div>
    )
}

export default ThirdSlide;
