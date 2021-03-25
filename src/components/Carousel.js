import React from 'react';

import Card from '../components/Card';

import kristabell from '../images/Kristabell.jpeg';
import github from '../images/forestrd.jpeg';
import linkdn from '../images/snowtree.jpeg';
import twitter from '../images/2flowers.jpeg';
import kids from '../images/kids.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Resume',
                    subTitle: 'PDF Format',
                    imgSrc: kristabell,
                    link: 'https://github.com/Kristabell74',
                    selected: true
                },
                {
                    id: 1,
                    title: 'GitHub Profile',
                    subTitle: 'Projects',
                    imgSrc: github,
                    link: 'https://github.com/Kristabell74',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Linked-in',
                    subTitle: 'Networking',
                    imgSrc: linkdn,
                    link: 'https://www.linkedin.com/in/kristabell-johnson-professional-profile/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Twitter',
                    subTitle: "Let's Tweet",
                    imgSrc: twitter,
                    link: 'https://twitter.com/bell77iam',
                    selected: false
                },
                {
                    id: 4,
                    title: 'FaceBook',
                    subTitle: "Life",
                    imgSrc: kids,
                    link: 'https://www.facebook.com/kristabell.johnson',
                    selected: false
                },

            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return (
            <div style={{ backgroundColor: 'lightBlue' }}>
                <Container fluid={true}>
                    <Row class="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Carousel;