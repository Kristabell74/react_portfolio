import React from 'react';
import Hero from '../models/Hero';
import Content from '../models/Content';

function About(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Greetings and Salutations everyone, I am, Kristabell Johnson, a full stack engineer with experience in HTML, CSS, Express JS, Node JS, OOP, MongoDB, MERN, SQL, Node.js, and React.</p>

                <p>I desire to build websites and design them.  I enjoy the creative process of webdesign and making the web page look not only neat and polished but professional and web ready.</p>

                <p>It is my desire to share my work and other people. I have ideas and thoughts and I would like to express myself more in an online setting.</p>

                <p>My latest projects are on GitHub<a href="https://github.com/Kristabell74" target="_blank" rel="noopener noreferrer">here</a>, or on the Home</p>

                <p>Hoping that I can make my dreams a reality, I would like to keep moving forward and develop a niche in web developement.</p>
            </Content>
        </div>
    );

}

export default About;
