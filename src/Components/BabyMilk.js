import React, { Component } from 'react';
import Seven from './Seven';
import One from './One';
class BabyMilk extends Component {
    render() {
        return (
            <div>
                <div class='badgeback'>
                    <p className='mybadge badge-pill badge-font'>Milk</p>
                </div>
                <One/>
                <Seven/>
            </div>
        );
    }
}

export default BabyMilk;