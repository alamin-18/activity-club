import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = () => {
    return (
        <div className='exercise-details'>
            <div>
                <h2>Add To Break</h2>
                <div>
                    <button>10</button>
                    <button>15</button>
                    <button>20</button>
                    <button>25</button>
                    <button>30</button>
                </div>
            </div>
            <div className=''>
                <h1>Exercise Details</h1>
                <div className='exercise-time'>
                    <p>Exercise time</p>
                    <p>secode</p>
                </div>
                <div className='exercise-time'>
                    <p>Break Time</p>
                    <p>secode</p>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetails;