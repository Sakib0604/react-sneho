import React, { Component } from 'react';
import One from './One'
import Login from './Login'
import Four from './Four'
import Five from './Five'
import Six from './Six'
import Seven from './Seven'
import Carousels from './Carousels'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousels/>
                <section>
                <div class='badgeback'>
                    <p className='mybadge badge-pill badge-font'>Trending</p>
                </div>
                    <One/>
                    <Login/>
                    <Four/>
                    <Five/>
                    <Six/>
                    <Seven/>
                </section>
                
            </div>
        );
    }
}

export default HomePage;