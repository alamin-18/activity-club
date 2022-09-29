import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className='blog-post'>
                <h1>How does react work?</h1>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your!</p>
            </div>
            <div>
                <h1>State and props difference</h1>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
                <h1>What do you use useEffect for?</h1>
                <p>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed we'll refer to it as our “effect”, and call it later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default Blog;