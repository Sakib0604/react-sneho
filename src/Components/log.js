import React, { Component } from 'react';

class log extends Component {
    render() {
        return (
            <div >
                <div className='container' style={{textAlign:'left'}}>
                <form >
                    <h3 style={{textAlign:'center'}}>Sign In</h3>

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

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>

                </form>

                
            </div>
            </div>
        );
    }
}

export default log;