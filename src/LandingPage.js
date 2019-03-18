import React, { Component } from 'react';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import Newdesk from "./Newdesk.jpg";
import Loft from "./Loft.jpg";
import building from "./building.jpg";



// export default class LandingPage extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <div className="article-list">
//           <div className="container">
//             <div className="intro">
//               <h1 className="text-center">Welcome to TimeOff Management</h1>
//               <p className="text-center">Open source, simple yet powerful absence management software for small and medium size business.</p>
//               <p className="text-center">Endorsed by&nbsp;<a href="#"><em>hundreds&nbsp;</em></a>of software developers.</p>
//               <p className="text-center">Taking leaves just became easier Folks, take leaves at your Comfort.</p>
//               <br />
//             </div>


//             <div className="row-articles">
//               <div className="col-sm-6 col-md-4 item"><a href="#"><img class="img-fluid" src={Newdesk}/></a>
//               <h4 className="name text-center">take a time off work</h4>
//               <br/><p className="description">The breaks you take from work pay you back manifolds when you return because you come back with a fresher mind and newer thinking...</p><a href="#" className="action"><i id="awesome" className="fa fa-arrow-circle-right"></i></a>
//               </div>
//             </div>
//             <div className="row-articles">
//               <div className="col-sm-6 col-md-4 item"><a href="#"><img class="img-fluid" src={Newdesk}/></a>
//               <h4 className="name text-center">take a time off work</h4>
//               <br/><p className="description">The breaks you take from work pay you back manifolds when you return because you come back with a fresher mind and newer thinking...</p><a href="#" className="action"><i id="awesome" className="fa fa-arrow-circle-right"></i></a>
//               </div>
//             </div>
//             <div className="row-articles">
//               <div className="col-sm-6 col-md-4 item"><a href="#"><img class="img-fluid" src={Newdesk}/></a>
//               <h4 className="name text-center">take a time off work</h4>
//               <br/><p className="description">The breaks you take from work pay you back manifolds when you return because you come back with a fresher mind and newer thinking...</p><a href="#" className="action"><i id="awesome" className="fa fa-arrow-circle-right"></i></a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     )
//   }
// }









































































export default class LandingPage extends Component {
  render() {
    return (
      <div className="body">
        <Navbar/>
        <div className="article-list">
           <div className="container">
             <div className="intro">
               <h1 className="text-center">Welcome to TimeOff Management App</h1>
               <p className="text-center">Open source, simple yet powerful absence management software for small and medium size business.</p>
               <p className="text-center">Endorsed by&nbsp;<a href="#"><em>hundreds&nbsp;</em></a>of software developers.</p>
               <p className="text-center">Taking leaves just became easier Folks, take leaves at your Comfort.</p>
               </div>
                
        <div className="article-clean">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                <div className="intro">
                  <p className="text-center"><span id="by"><em>by</em></span> <a href="#">Olakunle Ayedun</a><span className="date"> | Mar 16, 2019</span></p><hr size="25"/><img class="img-fluid" src={Newdesk}/>
                </div>
                <hr size="25"/>
                  <div className="text-center"><br/>
                    <h2 id="text" className="text-center">Take a time off work</h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                      <div className="about">
                        <img class="img-fluid" src={Loft}/>
                        <p className="text-center"><b>The breaks you take from work pay you back manifolds when you return because you come back with a fresher mind and newer thinking...</b></p><a href="#" className="action"><i id="awesome" className="fa fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    )
  }
}





















































































































// export default class LandingPage extends Component {
//   render() {
//     return (       
//       <div>     
//                 <Navbar/>
//                 <div className="card card-body text-center">
//                 <Link to="/">
//                   <h1 class="text-center card-title">TimeOff.Management</h1>
                
//                 </Link>
//                   <p class="card-text text-center"  >Open source, simple yet powerful absence management software for small and medium size business.</p>
//                   <p class='text-center'>Endorsed by&nbsp;<a href="#">hundreds&nbsp;</a>of software developers</p>
//                   <Link to="/SignUp">
//                   <button class="btn btn-primary">Sign Up</button>
//                   </Link>
//                 </div>

//         </div>
    
//     )
//   }
// }
