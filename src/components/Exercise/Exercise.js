import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
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
    console.log(detail)
    return (
        <div className='container'>
            <div className="exercise">
                {
                    activitys.map(activity => <Card handleButton={handleButton} key={activity.id } activity={activity}></Card>)
                }
            </div>
            <div className="status"><h2>status</h2></div>
        </div>
    );
};

export default Exercise;