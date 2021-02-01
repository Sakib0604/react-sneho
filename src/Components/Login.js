import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Banner extends Component {

     

    render() {
        return (
            <div className='backImg'>
                <a href='https://sneho.com.bd/product-category/baby-gift/'>
                    <img src='https://sneho.com.bd/wp-content/themes/hellobaby/assets/images/bg-baby-gift.jpg' className='img-fluid'/>
                </a>
            </div>
        );
    }
}

export default Banner;