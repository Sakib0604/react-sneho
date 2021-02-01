import React, { Component } from 'react';
import One from './One';
import Seven from './Seven'
class BabyFood extends Component {
    render() {
        return (
            <div>
                <div class='badgeback'>
                    <p className='mybadge badge-pill badge-font'>Food</p>
                </div>
                <One/>
                <Seven/>
            </div>
        );
    }
}

export default BabyFood;