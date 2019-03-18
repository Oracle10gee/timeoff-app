import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <div>
            <nav class="navbar">
                  <ul class="nav nav-tabs">
                  <Link to="/"><li class="nav-item"><a class="nav-link" href="#"><b>Time off Management</b></a></li></Link>
                  </ul>
                  <Link to="/Login">
                  <form>
                    <Link to="/SignUp">
                  <button id="sign up" class="btn btn-outline-info">Sign up</button>
                    </Link>
                  <button id="sign in" class="btn btn-outline-info">Sign in</button>
                  </form>
                  </Link>
               </nav>
      </div>
    )
  }
}
