import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';



function About(props) {

    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} />

            <Content>
                <header>
                    A short summary of when I started coding:
                </header>
                <p>
                    <p>

                    </p>
                </p>
                <p>
                    Last year while working with a web development company we had a great site built.
                    When we decided to leave the company after the year contract was up the company haded
                    the website to us in pieces and told us to put it together. It was a mess. At this point
                    I had already researched and started to learn coding online through Khan Academy and
                    articles. I wanted to build a new site or fix the current site so that it works. The
                    current site is a disaster.
                </p>
                <p>
                    When I was on FaceBook I saw the Coding BootCamp for University of Denver. Since I was
                    frustrated with the way things were going and the bits and pieces of stuff I was
                    learning online I wanted to take the course. Overwhelmed and intimidated by the thought
                    of going to these classes I still wanted to try to learn coding. I really wanted to
                    learn how to build beautiful, practical, working, and functional websites. Knowing it
                    will not be easy I will do my best. I hope to be able to not only build a better website
                    but to possibly work on building websites for others. I am exited to see the
                    opportunities and doors that learning code will open.
                </p>

                <p>The latest project I accomplished is this portfolio. Check it out at <a href="https://github.com/Kristabell74/react_portfolio.git" target="_blank" rel="noopener noreferrer">here</a> or on the Home page of this site.</p>

                <p>When I am not coding, I manage a limousine service called D and K's Family Limousine LLC <a href="http://www.dksfamilylimo.com" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>
        </div>
    );

}

export default About;