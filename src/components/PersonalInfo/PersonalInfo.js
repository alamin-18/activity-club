import React from 'react';
import './PersonalInfo.css'
import img from '../../img/IMG_20190309_153506_8.jpg'

const PersonalInfo = () => {
    return (
        <div>
            <div className='personal-info'>
                <div className='my-info'>
                <img src={img} alt="" />
                <div>
                    <h2>Md Al Amin</h2>
                    <p>Pabna,Dhaka,Bangladesh</p>
                </div>
                </div>
                <div className='info'>
                    <div>
                        <h2>55<small>kg</small></h2>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h2>5.11</h2>
                        <p>Height</p>
                    </div>
                    <div>
                        <h2>19<small>yrs</small></h2>
                        <p>Age</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;