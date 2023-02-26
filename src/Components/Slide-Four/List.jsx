import React from 'react'

const List = () => {
    return (
        <div className="display-list">
            <div className='user'>
                <h3>Diane Cooper</h3>
                <small>diane.cooper@example.com</small>
            </div>
            <div className="list-align">
                <div className="lists">
                    <div className="grid-det">
                        <small>Gender</small>
                        <p>Female</p>
                    </div>
                    <div className="sideline"></div>
                    <div className="grid-det">
                        <small>Birthday</small>
                        <p>Feb 24th, 1997</p>
                    </div>
                    <div className="sideline"></div>
                    <div className="grid-det">
                        <small>Phone Number</small>
                        <p>(239) 0555 -0108</p>
                    </div>
                    <div className="sideline"></div>
                    <div className="grid-det">
                        <small>Member Status</small>
                        <p>Active Member</p>
                    </div>
                </div>
                <div className="info-new">
                    <div className="past">
                        <h2>15</h2>
                        <p>Past</p>
                    </div>
                    <div className="sideline"></div>
                    <div className="upcoming">
                        <h2>02</h2>
                        <p>Upcoming</p>
                    </div>
                    <div className='view-ecg'>
                        <p>View ECG Report Documents</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
