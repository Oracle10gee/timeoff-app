import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './HomeStyle.css'
class Home extends Component { 
    render() {
        return (
            <div>
                   <nav className="navbar navbar-expand-lg navbar-light bg-danger navbar-fixed-top  ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active ml-2">
                    <Link className="nav-link text-light" to="/">
                        TimeOff.Management <span className="sr-only">(current)</span>
                    </Link>
                </li>

                </ul>
                
                
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-3">
                        <Link className="nav-link text-light" to="/login" >Login </Link>
                        </li>
                        <li className="nav-item ml-3">
                            <Link className="nav-link btn btn-outline-light text-light" to="/register">Sign Up</Link>
                        </li>
                </ul>

            </div>
            </nav>
     
              <div className="jumbotron">
                <h1 className="display-4 pull-left">Welcome to Time Off Management</h1>
                    <div className="float-right mr-3"> 
                        {/* <img width="100px" alt="clock-time" src="https://st4.depositphotos.com/4323461/20704/v/1600/depositphotos_207042472-stock-illustration-man-wants-to-stop-the.jpg" />
                        <span className="fa fa-calendar fa-5x" ></span> */}
                    </div>
                <h1 className="lead mt-lead">Open source, simple yet powerful absence management software for small and medium size Companies.</h1>
                <h2 className="lead mt-lead">Endorsed by&nbsp;<a href="#"><em>hundreds&nbsp;</em></a>of software developers.</h2>                
                <hr className="my-4" />
                <p>Taking leaves just became easier Folks, take leaves at your Comfort.</p>
            </div>
                <p className="lead">
                    <Link id="butt" className="text-center btn btn-outline-danger btn-lg" to="/register">Sign Up Here</Link>
                </p>
            <div className="container mb-10">    
                <h2 className="text-primary text-center mb-5">Enjoy Your Time Off!!!!!</h2>
                <div className="row text-center features">
                

                    <div className="col-3">
                   <img src="https://images.prod.meredith.com/product/c6c055899084584ac174101a1a557adb/1503123386833/l/c-r-gibson-selfie-stickers-diva-ss-14356" 
                   alt="partytime" />
                        <h5 className="mt-3">Party with Friends</h5>
                     
                    </div>
                    <div className="col-3">
                        <img alt="vacation"
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNuUCilakGn-elngOP_T1j1PlyeogzFUszQrGfJUT1Nx3DXAr6' />
                        <h5 className="mt-3">Take a break and go on a Vacation</h5>
                    </div>
                    <div className="col-3">
                    <img alt="medicals"
                            src='https://images-na.ssl-images-amazon.com/images/I/61A2Cds084L._SY679_.jpg' />
                        <h5 className="mt-3">Go for Medical CheckUps</h5>
     
                     
                    </div>
                    {/* <div className="col-2">
                    <img alt="medicare"
                            src='https://i.imgur.com/1ctoTjX.png' />
                        <h5 className="mt-3">Attend Meetups</h5>
     
                     
                    </div> */}
                    <div className="col-3">
                    <img alt="marriage"
                            src='https://p9s9s2e5.stackpathcdn.com/7455-large_default/wedding-stickers-for-favours-20.jpg' />
                        <h5 className="mt-3">Get Married</h5>                 
                    </div>
                    {/* <div className="col-3">
                    <img alt="medicare"
                            src='https://previews.123rf.com/images/lenm/lenm1107/lenm110700267/9991433-illustration-of-friends-having-a-beach-party.jpg' />
                        <h5 className="mt-3">Special Occassions</h5>
     
                     
                    </div> */}
                </div>
            </div>
        </div>
        )
    }

}
export default Home;