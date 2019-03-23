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



























// import React, { Component } from 'react';
// import LandingPage from "./LandingPage";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css";
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import SignUp from './SignUp';
// import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
// import Login from './Login';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Switch>
//           <Route path="/" exact component={LandingPage} />
//           <Route path="/SignUp" component={SignUp} />
//           <Route path="/Login" component={Login} /> 
//           <Route component={LandingPage}/>
//           </Switch>
//         </div>
//       </Router>
        
//     );
//   }
// }

// export default App;

























import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import EmployeeDashboard from './component/dashboard/employee/Employee-Dashboard';
import NewAbsenceForm from './component/dashboard/new-absence/NewAbsence';

import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import Login from './component/auth/login/Login';
import Register from './component/auth/register/Register';
import TeamView from './component/dashboard/team-view/TeamView';
class App extends Component {
  render() {
    return (
      <div>
    <BrowserRouter>
        <div>
          
             {/* <Header /> */}
         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/employee-dashboard" component={EmployeeDashboard} />
            <Route exact path="/team-view" component={TeamView} />
            <Route exact path="/new-absence" component={NewAbsenceForm} />

          </Switch> 
          <Footer />
        </div>
     </BrowserRouter>

      </div>
    );
  }
}

export default App;
