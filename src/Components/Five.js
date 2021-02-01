import React, { Component } from 'react';

class Five extends Component {
    render() {
        return (
            <div className='five'>
                <h2>What Our Customers Say</h2>
                <div className='containerfive'>
                    <div className='item item-1'>
                        <img src='https://sneho.com.bd/wp-content/themes/hellobaby/assets/images/cust_review_1.jpg' className='img-fluid foo'></img>
                        <p>Their prices are the lowest I’ve found and there’s nothing more convenient than having everything you need for your baby.</p>
                    </div>
                    <div className='item item-2'>
                        <img src='https://sneho.com.bd/wp-content/themes/hellobaby/assets/images/cust_review_2.jpg' className='img-fluid foo'></img>
                        <p>Great service and products definitely, recommend it.</p>
                    </div>
                    <div className='item item-3'>
                        <img src='https://sneho.com.bd/wp-content/themes/hellobaby/assets/images/cust_review_3.jpg' className='img-fluid foo'></img>
                        <p>Made my life so much easier. Amazing service and always on time.</p>
                    </div>
                    <div className='item item-4'>
                        <img src='https://sneho.com.bd/wp-content/themes/hellobaby/assets/images/cust_review_4.jpg' className='img-fluid foo'></img>
                        <p>Easy and quick!</p>
                    </div>
                    <div className='item item-5'>
                        <img src='https://sneho.com.bd/wp-content/themes/hellobaby/assets/images/cust_review_5.jpg' className='img-fluid foo'></img>
                        <p>An absolutely brilliant service that helps busy mums. Can’t recommend it enough!</p>
                    </div>
                    <div className='item item-6'>
                        <img src='https://sneho.com.bd/wp-content/themes/hellobaby/assets/images/cust_review_6.jpg' className='img-fluid foo'></img>
                        <p>I tried for the first time when all this covid thing started and only one regret... to not to try it before! It just makes the parents life easy!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Five;