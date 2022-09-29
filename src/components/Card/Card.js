import React from 'react';
import './Card.css'

const Card = ({handleButton,activity}) => {
    const {img,name,time,age,about} = activity
    return (
        <div className='card-container'>
            <div className='card'>
            <img src={img} alt="" />
            <div>
                <h1>{name}</h1>
                <p>For Age: {age}</p>
                <p>Time required: {time}s</p>
            </div>
            </div>
            <button onClick={()=>handleButton(activity)} className='btn'>Add To list</button>
        </div>
    );
};

export default Card;