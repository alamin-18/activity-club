import logo from '../../img/person-running-solid.svg'
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Card from '../Card/Card';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import './Exercise.css'

const Exercise = () => {
    const [activitys,setActivitys] = useState([])
    const [detail,setDetail] = useState([])
    
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setActivitys(data))
    },[])
    const handleButton =(activity)=>{
        const  details = [...detail,activity]
        setDetail(details)
    }
    return (
        <div className='container'>
                <div>
                    <div className='hedaer'>
                        <h1><img src={logo} alt="" /> fitness Club</h1>
                        <p>Select today’s exercise</p>
                    </div>
            
                 <div className="exercise">
                
                    {
                    activitys.map(activity => <Card handleButton={handleButton} key={activity.id } activity={activity}></Card>)
                    }
                </div>
            </div>
            <div className="status"><ExerciseDetails details={detail}></ExerciseDetails></div>
            <Blog></Blog>
        </div>
    );
};

export default Exercise;