import React, { Component } from 'react';

export default class ForgotPass extends Component{
    render(){
        return(
        <form>
            <h3>Forgot Password</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>New password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <label>Confirm password</label>
                <input type="password" className="form-control" placeholder="Confirm password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
        )
    }
}