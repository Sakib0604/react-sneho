import React, { Component } from 'react';
import Diapers from './Diapers';
import HomePage from './HomePage';
import BabyCare from './BabyCare'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BabyFood from './BabyFood';
import BabyMilk from './BabyMilk';
import BabyAcce from './BabyAcce';
import log from './log';

import '../FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WishList from './WishList';
import Cart from './Cart';

import Carousel from 'react-bootstrap/Carousel'
import Details from './Details';

class Navy extends Component {
    render() {

        function openSearch() {
            document.getElementById("myOverlay").style.display = "block";
          }
          
          function closeSearch() {
            document.getElementById("myOverlay").style.display = "none";
          }

          function openLogin() {
            document.getElementById("myOverlayLogin").style.display = "block";
          }
          
          function closeLogin() {
            document.getElementById("myOverlayLogin").style.display = "none";
          }

        return (
            <div>
                <Router>
                        <div >
                        <nav className='navbar navbar-expand-md bg-transparent navbar-light' >
                    
                    <div className="container">
                        
                        <img style={{height:'75px'}} src='https://sneho.com.bd/wp-content/themes/hellobaby/assets/images/sneho-logo-with-brand-color-bg.svg'></img>
                        
                        <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#mynav'>
                        <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className='collapse navbar-collapse' id='mynav'>

                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                            
                                <Link to={"/home-page"} className="nav-link">Home</Link>
                            </li>
                            <li className='nav-item'>
                            
                                <Link to={"/diaper"} className="nav-link">Diaper</Link>
                            </li>
                            <li className='nav-item'>
                            
                                <Link to={"/baby-care"} className="nav-link">Baby Care</Link>
                            </li>
                            <li className='nav-item'>
                            
                                <Link to={"/baby-food"} className="nav-link">Baby Food</Link>
                            </li>
                            <li className='nav-item'>
                            
                                <Link to={"/baby-milk"} className="nav-link">Baby Milk</Link>
                            </li>
                            <li className='nav-item'>
                            
                                <Link to={"/baby-acce"} className="nav-link">Baby Accessories</Link>
                            </li>
                        </ul>

                        <div className='ml-auto'>
                            <ul className='navbar-nav'>
                            <li className='nav-item'>
                            <div id="myOverlay" class="overlay">
                                <span class="closebtn" onClick={closeSearch} title="Close Overlay">×</span>
                                <div class="overlay-content">
                                    <form action="/#">
                                        <input type="text" placeholder="Search.." name="search"/>
                                        <button type="submit"><FontAwesomeIcon icon="search" /></button>
                                    </form>
                                </div>
                            </div>
                                <Link className='nav-link' onClick={openSearch}><FontAwesomeIcon icon="search" />

                            </Link></li>
                            <li className='nav-item'><Link to={"/wish-list"} className='nav-link'><FontAwesomeIcon icon="heart" /></Link></li>
                            <li className='nav-item'><Link to={"/cart-page"} className='nav-link'><FontAwesomeIcon icon="shopping-cart" /></Link></li>
                            
                            <li className='nav-item'>
                                <div id="myOverlayLogin" class="overlaylogin">
                                    <span class="closebtn" onClick={closeLogin} title="Close Overlay">×</span>
                                    
                                    <div class="overlaylogin-content">
                                        <form action="/#">
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" placeholder="Enter email" />
                                            </div>

                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Enter password" />
                                            </div>

                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                                        </form>
                                    </div>
                                </div>
                                <Link onClick={openLogin} className='nav-link btn btn-sm btn-outline-secondary'>
                                    Login
                                </Link>
                            </li>
                            </ul>
                        </div>

                        </div>


                    </div>
                    
                    </nav> 

                            <Switch>
                                <Route exact path='/' component={HomePage} />
                                <Route path="/home-page" component={HomePage} />
                                <Route path="/diaper" component={Diapers} />
                                <Route path="/baby-care" component={BabyCare} />
                                <Route path="/baby-food" component={BabyFood} />
                                <Route path="/baby-milk" component={BabyMilk} />
                                <Route path="/baby-acce" component={BabyAcce} />
                                <Route path="/wish-list" component={WishList} />
                                <Route path="/cart-page" component={Cart} />
                                <Route path="/log-page" component={log} />
                                <Route path="/details" component={Details} />
                            </Switch>

                        </div>
                </Router>
            </div>
        );
    }
}

export default Navy;