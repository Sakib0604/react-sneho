import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Carousels extends Component {
    render() {
        return (
        <Carousel>
            <Carousel.Item>
                <img
                
                className="d-block w-100"
                src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-blue-hand-painted-cartoon-mother-and-baby-promotion-banner-image_177388.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                
                className="d-block w-100"
                src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cute-baby-products-promotion-banner-poster-background-image_180440.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                
                className="d-block w-100"
                src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-mother-and-baby-sale-cute-cartoon-banner-image_194807.jpg"
                alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
        );
    }
}

export default Carousels;