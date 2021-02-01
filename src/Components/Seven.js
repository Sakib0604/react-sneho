import React, { Component } from 'react';

class Seven extends Component {
    render() {
        return (
            <div>
                <footer className='seven'>
                    <div className='sevencontainer'>
                        <div className='sv'>
                            <div className='item item-1 input-group'>
                                <input type="text" placeholder='Enter your email' style={{width:'350px',height:'50px',backgroundColor:'#3E3E3E',border:'none'}}/>
                                <input type="submit" className='btn' value='Subscribe' style={{backgroundColor:'#F79433',border:'none'}}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='sevencontainerone'>
                        <div className='item item-2'>
                            <img src='https://sneho.com.bd/wp-content/themes/hellobaby/assets/images/sneho-logo-v2.svg' style={{width:'135px' ,position:'center'}}></img>
                        </div>
                        <div className='item item-3'>
                            <h5>Help Support</h5>
                            <a href='#'>About Us</a><br/>
                            <a href='#'>Contact Us</a>
                        </div>
                        <div className='item item-4'>
                            <h5>Shop Info</h5>
                            <a href='#'>Refund and Return Policy</a><br/>
                            <a href='#'>Terms Conditions</a>
                        </div>
                        <div className='item item-5'>
                            <h5>Customer Support</h5>
                            <a href='#'>FAQ’s</a>
                        </div>
                        <div className='item item-6'>
                            <h5>Contact us</h5>
                            <p>111, Bir Uttom C. R. Dutta Road,<br/>
                                Sonargaon Road<br/>
                                Dhaka-1205<br/>
                                <a href='tel:09606-221804'>09606-221804</a> for support
                                </p>
                        </div>
                    </div>
                    <div className='sevencontainertwo'>
                        <div className='item item-7'>
                            <h5>Payment Method</h5>
                            <img src="https://sneho.com.bd/wp-content/themes/hellobaby/assets/images/icon-payment-getway.png" alt=""/>
                        </div>
                        <div className='item item-8'>
                            <p style={{fontSize:'15px'}}>
                                An e-Commerce Revolution by <span><a href="https://www.aiimglobal.com/"> AIIM Global Ltd</a></span>
                            </p>
                            <p style={{fontSize:'15px'}}>
                                sneho.com.bd © 2021 All Rights Reserved  | <span><a href="https://www.aiimglobal.com/">Terms & Conditions</a></span>
                            </p>
                        </div>
                        <div className='item item-9'>9</div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Seven;