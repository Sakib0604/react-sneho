import React, { Component } from 'react';
import Seven from './Seven';

class Cart extends Component {
    render() {
        return (
            <div>
                <div class='badgeback ' style={{paddingBottom:"300px"}}>
                    <p className='mybadge badge-pill badge-font'>Cart</p>
                </div>
                <Seven/>
            </div>
        );
    }
}

export default Cart;