// import React, { Component } from 'react';
// import NoteApp from "./NoteApp";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css";



// class App extends Component {
  
//   render() {
//     return (
//       <div>
//         <NoteApp />
//       </div>
//     );
//   }
// }

// export default App;



























import React, { Component } from 'react';
import LandingPage from "./LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Login} /> 
          <Route component={LandingPage}/>
          </Switch>
        </div>
      </Router>
        
    );
  }
}

export default App;
