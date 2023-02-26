import React from 'react'
import './FourthSlide.css';
import List from './List';
const FourthSLide = () => {
    return (
        <>
            <div className='last-container'>
            <div className="find-name">
                <h2>Find by Name or Phone Number</h2>
                <div className="sex-status">
                    <p>Gender</p>
                    <p>Female</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                    </svg>
                    <p>Member Status</p>
                    <p>Active Member</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                    </svg>
                </div>
            </div>
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
        </div>

        </>
    )
}

export default FourthSLide
