import React, { Component } from 'react';
import Seven from './Seven';

class WishList extends Component {
    render() {
        return (
            <div>
                <div class='badgeback' style={{paddingBottom:"300px"}}>
                    <p className='mybadge badge-pill badge-font'>Wishlist</p>
                </div>
                <Seven/>
            </div>
        );
    }
}

export default WishList;