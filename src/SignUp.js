import React, { Component } from 'react'
import Navbar from './Navbar';


export default class SignUp extends Component{
  constructor(props){
    super(props);
     this.state = {
        username: '',
        username2: '',
        error: '',  
        error1: '',  
        isDisabled:true
     }                                                                                                 
     this.submitForm = this.submitForm.bind(this);
  }

  handleUsernameChange = e => {
    console.log('handleUsernameChange()');
    const target = e.target;
    this.setState({
      username: target.value,
      error: target.validationMessage
    });
  }

  handleUsernameChange2 = e => {
    console.log('handleUsernameChange2()');
    const target = e.target;
    this.setState({
      username2: target.value,
      error: target.validationMessage
    });
  }


  handleSubmit = e => {
    console.log('handleSubmit() Submit form with state:', this.state);
    e.preventDefault();
  }



  validateEmail(email){
   const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
   const result = pattern.test(email);
   if(result===true){
     this.setState({
       emailError:false,
       email:email
     })
   } else{
     this.setState({
       emailError:true
     })
   }
 }
 handleChange(e){
  const target = e.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  this.setState({
    [name]: value
  });
  if(e.target.name==='firstname'){
    if(e.target.value==='' || e.target.value===null ){
      this.setState({
        firstnameError:true
      })
    } else {
      this.setState({
        firstnameError:false,     
        firstName:e.target.value
      })
    }
  }
  if(e.target.name==='lastname'){
    if(e.target.value==='' || e.target.value===null){
      this.setState({
        lastnameError:true
      })
    } else {
      this.setState({
        lastnameError:false,
        lastName:e.target.value
      })
    }
  }
  if(e.target.name==='email'){
   this.validateEmail(e.target.value);
  }
  if(e.target.name==='password'){
    if(e.target.value==='' || e.target.value===null){
      this.setState({
        passwordError:true
      })
    } else {
      this.setState({
        passwordError:false,
        password:e.target.value
      })
    }
 }
 if(this.state.firstnameError===false && this.state.lastnameError===false && 
  this.state.emailError===false && this.state.passwordError===false){
    this.setState({
      isDisabled:false
    })
 }
}
submitForm(e){
  e.preventDefault();
  const data = {
   firstName: this.state.firstName,
   lastName: this.state.lastName,
   email: this.state.email,
   password: this.state.password
  }
//   sendFormData(data).then(res=>{
//     if(res.status===200){
//       alert(res.data);
//       this.props.history.push('/');
//     }else{

//     } 
//   });
 }


  render() {
    return (
      <div>
        <Navbar/>
        <div className="container" style={{fontWeight: "bold"}}>
    <div className="card card-login mx-auto mt-5">
      <div className="card-header">Register here</div>
        <div className="card-body">
            <form id="signup-form">
            <div className="form-group">
            <label htmlFor="username2">First Name</label>
            <input
              id="username2"
              name="username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              placeholder="Name"
              pattern="[A-Za-z]{3}"
              className="form-control" />
            <div className="invalid-feedback d-block">
              {this.state.error}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Last Name</label>
            <input
              id="username"
              name="username1"
              value={this.state.username2}
              onChange={this.handleUsernameChange2}
              placeholder="Name"
              pattern="[A-Za-z]{5}"
              className="form-control" />
            <div className="invalid-feedback d-block">
              {this.state.error1}
            </div>
          </div>
             <div className="form-group">
             <label htmlFor="email">email</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" onChange={(e)=>{this.handleChange(e)}} />
                  
                  {this.state.emailError ? <span style={{color: "red"}}>Please Enter valid email address</span> : ''}
                
              </div>                
              <div className="form-group">
              <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className="form-control" placeholder="Password" onChange={(e)=>{this.handleChange(e)}} />
                  {this.state.passwordError ? <span style={{color: "red"}}>Please enter a password</span> : ''}
                </div>

                <div className="form-group">
              <label htmlFor="password1">Confirm Password</label>
                <input type="password" id="password1" name="password" className="form-control" placeholder="Password" onChange={(e)=>{this.handleChange(e)}} />
                  {this.state.passwordError ? <span style={{color: "red"}}>Please enter a password</span> : ''}
                </div>






    



                <div className="form-group">
              <label htmlFor="country2">Country</label>
                <input type="text" id="country2" list="country-list" className="form-control" placeholder="choose your country" onChange={(e)=>{this.handleChange(e)}} />
                <datalist id="country-list">
                <option value="Nigeria"/>
                <option value="England"/>
                <option value="Brazil"/>
                <option value="Spain"/>
                <option value="Egypt"/>
                <option value="togo"/>
                <option value="turkey"/>
                <option value="tunisia"/>
                <option value="Italy"/>
                <option value="France"/>
                </datalist>
                </div>

                <div className="form-group">
              <label htmlFor="time-zone">Time zone</label>
                <input type="text" id="time-zone" list="timeZone" className="form-control" placeholder="choose your time zone" onChange={(e)=>{this.handleChange(e)}} />
                <datalist id="timeZone">
                <option value="Gmt+1"/>
                <option value="Gmt+2"/>
                <option value="Gmt+3"/>
                <option value="Gmt+4"/>
                <option value="Gmt+5"/>
                <option value="Gmt+6"/>
                <option value="Gmt+7"/>
                <option value="Gmt+8"/>
                <option value="Gmt+9"/>
                <option value="Gmt+10"/>
                </datalist>
                </div>
                                
              <button className="btn btn-primary btn-block" >Create Account</button>
            </form>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
