import React , { Component } from 'react';
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar';
import './employee.css';

// Render the Calendar
const username = 'Ayedun Olakunle';
const typeOfTimeOff = [
    {name: 'Vacation', days: 7},
    {name: 'party', days: 2},
    {name: 'Medical', days: 4},
    {name: 'Marriage', days: 7},
    // {name: 'Attend Meetup', days: 3},
]
const employeDetail = {name: 'Ayedun olakunle', departement: 'Software', position: 'Web Developer'}
const requests = [
    {name: 'Medicals', date: '12/03/2019'},
    {name: 'Maarriage', date: '23/02/2019'},
    {name: 'Vacation', date: '14/01/2019'},
]
const allAbsence = [
{type: 'Vacation', days: 3, startDate: '02/03/2019', stopDate: '05/03/2019', approvalBy: 'Mr kunle', status: 'Approved'},
{type: 'Christmas leave', days: 4, startDate: '23/03/2018', stopDate: '27/02/2018', approvalBy: 'Mr Mayowa', status: 'Approved'},
{type: 'marriage', days: 7, startDate: '11/03/2019', stopDate: '18/03/2019', approvalBy: 'Miss Ireti', status: 'Approved'},
]
const calendarDate = [
    new Date(2019 , 0, 9), new Date(2019, 1, 23), new Date(2018, 2, 25), new Date(2019, 3, 11)
]
const MoreCalendarDate = [
    new Date(2019 , 0, 9), new Date(2019, 1, 23), new Date(2018, 2, 25), new Date(2019, 3, 11),
    new Date(2019 , 4, 2), new Date(2019, 5, 13), new Date(2018, 6, 25), new Date(2019, 7, 21),
    new Date(2019 , 8, 16), new Date(2019, 9, 8), new Date(2018, 10, 30), new Date(2019, 11, 24)
]
class EmployeeDashboard extends Component {
    state = {
        showMore: false,
        showMoreText: 'Show More'
    }
   handeleShowMore = () => {
        this.setState({
            showMore: !this.state.showMore,
            showMoreText: 'Show Less'
        })
    }
    render(){
        return(
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
                <li className="nav-item active ">
                    <Link className="nav-link text-light" to="/employee-dashboard">
                        Employee Dashboard 
                    </Link>
                </li>
                <li className="nav-item active ">
                    <Link className="nav-link text-light" to="/team-view">
                        Team View 
                    </Link>
                </li>
                <li className="nav-item active ">
                    <Link className="nav-link bg-light text-primary" to="/new-absence">
                        New Absence
                    </Link>
                </li>
                </ul>
                
                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item ml-3" onClick={this.handleLogout}>
                            <Link className="nav-link btn btn-outline-light text-light" to="/login">Logout</Link>
                            </li>
                        </ul>
            
             

            </div>
            </nav>
     
                <div  className="text-center ml-3 mt-3" >
                <h3>Empolyee Dashboard</h3>
                <h5>{username}</h5>
                </div>

                <div className="container">
                <hr />
                    <h3 className="text-center" style={{color: "red"}}>Statistics</h3>
                    <hr />
                    <div className="row mt-5 statistics">
                        <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-danger text-light">Days Remaining</div>
                            <div className="card-body">
                                <h1>10 Days</h1>
                                <h6>Out Of 20 Working Days</h6>
                            </div> 
                        </div>
                        </div>

                        <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-danger text-light">Types Of Absence Leave</div>
                            <div className="card-bod">
                            <ul className="list-group"> 
                                {
                                typeOfTimeOff.map((item , index) => {
                                        return <div key={index}>
                                            <li  className="list-group-item"> {item.name} 
                                                <span className="badge badge-danger float-right ">{item.days}</span></li>
                                            </div>
                                })
                                }
                            </ul>
                            </div> 
                        </div>
                      </div>

                        <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-danger text-light">Available Requests</div>
                            <div className="card-bod">
                            <ul className="list-group"> 
                                {
                                requests.map(item => {
                                        return <div key={item.date}>
                                            <li className="list-group-item"> {item.name} 
                                                <span className="badge badge-danger float-right ">{item.date}</span></li>
                                            </div>
                                })
                                }
                            </ul>
                            </div> 
                        </div>
                      </div>
                    
                      <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-danger text-light">Profile</div>
                            <div className="card-body text-center ">
                                <i className="fa fa-user-circle-o fa-3x "></i>
                                <div className="mt-2">
                                    <h6>Name: {employeDetail.name}</h6>
                                    {/* <h6>Department: {employeDetail.departement}</h6> */}
                                    <h6>Position: {employeDetail.position}</h6>
                                </div>
                            </div> 
                        </div>
                        </div>

                    </div>
                    <h2 className="text-center mt-4 mb-3 " style={{color: "red"}}>
                    Calendar  <button onClick={this.handeleShowMore} className="btn btn-danger">{
                        !this.state.showMore ? 'Show More' : 'Show Less'
                    }</button> </h2>
                    <div className="row">
                   
                    { !this.state.showMore ?
                        calendarDate.map((item, index) => {
                            return <div key={index} className="col-md-3 ">
                            <Calendar 
                                value={item}
                                />
                            </div>  
                        }) : MoreCalendarDate.map((item, index) => {
                            return <div key={index} className="col-md-3 mb-2">
                            <Calendar
                                value={item}
                                />
                            </div>  
                        })
                    }
      

                    </div>
                        

                    <h3 className="text-center mt-3" style={{color: "red"}}>All Absences</h3>
                    <div className="row mb-5 py-3">
                        <div className="col-12">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Type</th>
                                <th>Number Of Days</th>
                                <th>Date</th>
                                <th>Approved By</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                          
                                {
                                    allAbsence.map((item, index) => {
                                        return <tr key={index}>
                                        <td>{item.type}</td>
                                        <td>{item.days}</td>
                                        <td>From: {item.startDate} To: {item.stopDate}</td>
                                        <td>{item.approvalBy}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                    })
                                }
                   
                            </tbody>
                        </table>
                        </div>
                    </div>
               
                </div>


            </div>
        )
    }
}
export default EmployeeDashboard;