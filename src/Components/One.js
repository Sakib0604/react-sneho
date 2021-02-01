import React, { Component } from 'react';
import Two from './Two'

class One extends Component {
    render() {
        return (
            <div className='product'>
                <Two/>
                <span className='pagi'>
                    <a href='#'><img src='https://www.flaticon.com/svg/static/icons/svg/262/262044.svg'></img></a>
                    <a href='#'><img src='https://www.flaticon.com/svg/static/icons/svg/262/262045.svg'></img></a>
                </span>
            </div>
        );
    }
}

export default One;