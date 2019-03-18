// import React, { Component } from 'react';
// import Navbar from "./Navbar";

// export default class Login extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }




// import React, {Component} from 'react';
// import Form , {Col} from 'react-bootstrap/Form';
// import {Button} from 'react-bootstrap';
// import '../src/index.css';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Navbar from "./Navbar";

// class Login extends Component{
//     constructor(...args) {
//       super(...args);
  
//       this.state = { validated: false };
//       this.handleSubmit=this.handleSubmit.bind(this);
//     }
  
//     handleSubmit(event) {
//       const form = event.currentTarget;
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//       this.setState({ validated: true });
//     }
  
//       render(){
//         const { validated } = this.state;
//           return(
//         <div className="container">
//           <Navbar id="special" style={{float: "left"}}/>
//          <div>       
//         <Form className="container"
//           noValidate
//           validated={validated}
//           onSubmit={e => this.handleSubmit(e)}
//         >
//           <Form.Row>
//             <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//               <Form.Label>Email</Form.Label>
//               <InputGroup>
//                 <InputGroup.Prepend>
//                   <InputGroup.Text id="inputGroupPrepend" pattern=".+@.+\..+" >@</InputGroup.Text>
//                 </InputGroup.Prepend>
//                 <Form.Control
//                   type="email"
//                   placeholder="Email"
//                   aria-describedby="inputGroupPrepend"
//                   required
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please choose a valid email.
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Form.Row>
//           <Form.Row>
//           <Form.Group as={Col} md="4" controlId="validationCustom03">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" min="6" max="10" placeholder="password" required />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a password
//               </Form.Control.Feedback>
//         </Form.Group>
//     </Form.Row>

//           <Form.Row>
//           <Form.Group as={Col} md="4" controlId="validationCustom03">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control type="password" min="6" max="10" placeholder="Confirm Password" required />
//               <Form.Control.Feedback type="invalid">
//                 Please confirm password
//               </Form.Control.Feedback>
//         </Form.Group>
//           </Form.Row>
//           <Button type="submit" bsStyle="success" >LogIn</Button>
//           </Form>
//         </div>  
//     </div>
//           )
//       }
//   }
  
//   export default Login;












import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';

export default class Login extends Component {
  render() {
    return (
      <div className="form-container">
        <Navbar />
        <form className="box">
          <h1>LOGIN</h1>
          <input type="text" placeholder="Enter name or email" name="" />
          <input type="password" placeholder="Enter password" name="" />
          <input type="submit" name="" value="Login" className="btn btn-primary" id="button" />
        </form>
      </div>
    )
  }
}
