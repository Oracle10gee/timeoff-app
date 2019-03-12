import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
            <nav class="navbar">
                  <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item"><a class="nav-link" href="#">Time off Management</a></li>
                  <button id="sign in" class="btn btn-success">Sign in</button>
                  </ul>
               </nav>
      </div>
    )
  }
}
