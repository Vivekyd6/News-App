import React,{ Component } from "react";

export default class Navbar extends Component {
  render(){
         return(
             <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                 <a className="navbar-brand" href="/">News App</a>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>

                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                         <li className="nav-item active">
                             <a className="nav-link" href="/">Home</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="/">About</a>
                         </li>
                             <li className="nav-item"><a className="nav-link" href="/about">Business</a></li>
                             <li className="nav-item"><a className="nav-link" href="/about">Entertainment</a></li>
                             <li className="nav-item"><a className="nav-link" href="/about">General</a></li>
                             <li className="nav-item"><a className="nav-link" href="/about">Health</a></li>
                             <li className="nav-item"><a className="nav-link" href="/about">Science</a></li>
                             <li className="nav-item"><a className="nav-link" href="/about">Sports</a></li>
                             <li className="nav-item"><a className="nav-link" href="/about">Technology</a></li>

                     </ul>
                 </div>
             </nav>
         </div>
        )
    }
    
};
