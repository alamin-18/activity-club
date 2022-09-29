import React, { useState } from 'react';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import './ExerciseDetails.css'

const ExerciseDetails = ({details}) => {
    const breakTime =[
        {id:1,time:10},
        {id:2,time:20},
        {id:3,time:30},
        {id:4,time:40},
        {id:5,time:50},
        {id:6,time:60}
    ]

    const [time,setTime] = useState({})
    
    let totalSecode =0
    for (const detail of details) {
        totalSecode = detail.time +totalSecode
        
    }
    const breakHandle = (time)=>{
        setTime(time)
        
    }
    console.log(time);
    return (
        <div className='exercise-details'>
            <PersonalInfo></PersonalInfo>
            <div>
                <h2>Add To Break</h2>
                <div className='break-btn-div'>
                    {
                        breakTime.map(time =><button key={time.id} onClick={()=>breakHandle(time)} className='break-btn'>{time.time}s</button>)
                    }
                </div>
            </div>
            <div className=''>
                <h1>Exercise Details</h1>
                <div className='exercise-time'>
                    <p>Exercise time</p>
                    <p>{totalSecode} Secode</p>
                </div>
                <div className='exercise-time'>
                    <p>Break Time</p>
                    <p>{time.time} Secode</p>
                </div>
            </div>
            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;