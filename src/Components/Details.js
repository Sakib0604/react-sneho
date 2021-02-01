import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Seven from './Seven';
import Two from './Two';
import Tabs from './Tabs';

class Details extends Component {
    render() {
        return (
            <div>
                            <Container fluid>
            <Row>
                <Col style={{textAlign:'right'}}>
                    <img src="https://sneho.com.bd/wp-content/uploads/2020/11/Untitled-1.jpg" alt=""/>
                </Col>

                <Col style={{textAlign:'left'}}>
                    <div style={{width:"550px"}}>
                        <h5>SKU: NLac2350</h5>
                        <h5>Categories: Baby Milk, Trending Item</h5>
                        <h2>Nestle Lactogen 2 Follow Up Formula Milk Powder (6-12 m) – BIB (350 gm)</h2>
                        <h4>৳ 500</h4>
                        <p>. Important Notice: There is no substitute for breast milk. Before you decide to use an infant formula consult your health professional for advice.</p>
                        <p>. Spray dried Infant Formula for infants from 6 months onwards when they are not breastfed.</p>
                        <p>. contains L. reuteri, helps accelerate babies’ digestion and eases their urination process.</p>
                        <p>. Product Storage: follow instructions on the packet</p>
                        <p style={{color:'green'}}>3 in stock</p>
                        <div className='input-group d-inline mr-4'>
                            <input type="button" value="-" className='px-3'/>
                            <input type="text" value='1' className='text-center'/>
                            <input type="button" value="+" className='px-3'/>
                        </div>

                        <div className="btn-group" >
                            <button type="button" className="btn " style={{backgroundColor:'#F79433'}}><FontAwesomeIcon icon="shopping-cart" /></button>
                            <button type="button" className="btn " style={{backgroundColor:'#F79430'}}>ADD TO CART</button>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='container'>
                <h3 className="text-left">Related to this product</h3>
                
            </div>
            </Container>
            <Two/>
            <Tabs/>
            <Seven/>
            </div>
        );
    }
}

export default Details;