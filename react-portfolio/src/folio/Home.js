import React from 'react';

import Hero from '../models/Hero';
import Carousel from '../models/Carousel';

function Home(props) {

    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </div>
    );

}

export default Home;