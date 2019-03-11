import React, { Component } from 'react';

export default class LandingPage extends Component {
  render() {
    return (       
      <div>
            <div class="card">
                <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item"><a class="nav-link active" href="#">Time off Management</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Sign In</a></li>
                </ul>
               </div>
            <div class="card-body text-center">
            <h1 class="text-center card-title">TimeOff.Management</h1>
            <p class="card-text text-center"  >Open source, simple yet powerful absence management software for small and medium size business.</p>
            <p class='text-center'>Endorsed by&nbsp;<a href="https://bootstrapstudio.io/releases/app/4.1.2/#">hundreds&nbsp;</a>of software developers</p>
            <button class="btn btn-primary text-center"
                type="button">Sign Up</button>
                </div>
    </div>
      </div>
    )
  }
}
