import React from 'react'
import { GraphFull } from '../../images';
import './SecondSlide.css';

const SecondSlide = () => {
    return (
        <div className='view-container'>
            <div className="view-report">
                <h1>View Report</h1>
                <div className="view-info">
                    <p>Patient Name : <span>David Allen</span></p>
                    <p>Date Uploaded : <span>04/28/2018 16:05:51</span></p>
                    <button><i class="fa-solid fa-upload"></i> <p>Download PDF</p></button>
                </div>
            </div>
            <div className="graph">
                <img src={GraphFull} alt="graph" width='1350px' height='200px' />
            </div>
            <div className="graph-values">
                <div className="violet"></div>
                <p>P Wave</p>
                <div className="blue-rec"></div>
                <p>ST</p>
                <div className="orange"></div>
                <p>T Wave</p>
                <div className="feature"></div>
                <p>Features</p>
                <div className="morph"></div>
                <p>Morphology</p>
            </div>
            <div className="legends">
                <h2><span>Legend   </span> Heart rate variablity chart</h2>
            </div>
            <div className="det-report">
                <div className="layer-1">
                    <p>PVC - Premature ventricular contractions</p>
                    <p>PAC - Preoperative Aspiration Culture</p>
                    <p>Second Degree - Second Degree Type-1/type-2</p>
                    <p>NB - Noise On Beat</p>
                </div>
                <div className="layer-2">
                    <p>Third Degree - Third Degree AV Block</p>
                    <p>P - P Wave</p>
                    <p>A! - Noise</p>
                    <p>HR -Heart Rate</p>
                    <p>E - Event Happening</p>
                    <p>HN - High Noise</p>
                </div>
                <div className="layer-3">
                    <p>B - Beat</p>
                    <p>BE -May/May not PVC</p>
                    <p>PE - Definitely PVC</p>
                    <p>BL - Beat Looking PVC's</p>
                    <p>L - Baseline Changes</p>
                    <p>R -Morph ChangeDue to Baseline</p>
                </div>
            </div>
        </div>
    )
}

export default SecondSlide
