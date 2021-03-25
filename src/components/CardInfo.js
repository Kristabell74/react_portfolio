import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({ opacity: 4, from: { opacity: 0 } });

    return (
        <div style={{ backgroundColor: 'lightGreen' }}>
            <animated.div class="g-card-info" style={style}>
                <p class="g-card-title">{props.title}</p>
                <p class="g-card-sub-title">{props.subTitle}</p>
                <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
            </animated.div>
        </div>
    );

}

export default CardInfo;