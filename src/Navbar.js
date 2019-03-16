import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <div>
            <nav class="navbar">
                  <ul class="nav nav-tabs card-header-tabs">
                  <Link to="/"><li class="nav-item"><a class="nav-link" href="#">Time off Management</a></li></Link>
                  <Link to="/Login">
                  <button id="sign in" class="btn btn-success">Sign in</button>
                  </Link>
                  </ul>
               </nav>
      </div>
    )
  }
}
