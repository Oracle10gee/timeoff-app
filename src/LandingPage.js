import React, { Component } from 'react';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
export default class LandingPage extends Component {
  render() {
    return (       
      <div>     
                <Navbar/>
                <div class="card card-body text-center">
                <Link to="/">
                  <h1 class="text-center card-title">TimeOff.Management</h1>
                
                </Link>
                  <p class="card-text text-center"  >Open source, simple yet powerful absence management software for small and medium size business.</p>
                  <p class='text-center'>Endorsed by&nbsp;<a href="https://bootstrapstudio.io/releases/app/4.1.2/#">hundreds&nbsp;</a>of software developers</p>
                  <Link to="/SignUp">
                  <button class="btn btn-success">Sign Up</button>
                  </Link>
                </div>

        </div>
    
    )
  }
}
