import React, { Component } from 'react';
import One from './One';
import Seven from './Seven';

class Diapers extends Component {
    render() {
        return (
            <div>
               <div class='badgeback'>
                    <p className='mybadge badge-pill badge-font'>Diapers</p>
                </div>
                <One/>
                <Seven/>
            </div>
        );
    }
}

export default Diapers;