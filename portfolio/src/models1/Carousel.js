import React from 'react';

import Card from './Card';

import river from '../Contact/river.jpeg';
import winter from '../assets/winter.jpeg';
import kjohnson from '../assets/images/kjohnson.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'river',
                    subTitle: 'A picture I took of the Nehalem River in Oregon ',
                    imgSrc: river.jpeg,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'kjohnson',
                    subTitle: 'GitHib Repository',
                    imgSrc: kjohnson.jpeg,
                    link: 'https://github.com/Kristabell74/prework-about-me',
                    selected: false
                },
                {
                    id: 2,
                    title: 'River',
                    subTitle: 'A Picture I took of a wintery road in Colorado',
                    imgSrc: winter.jpeg,
                    link: '',
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
            <Container fluid={true}>
                <Row class="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;