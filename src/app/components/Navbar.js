import React from 'react';
import { Link} from 'react-router-dom';



class Navbar extends React.Component {
    render(){
        return(
            <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <a className="navbar-brand" href="#">Hajala</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#"><Link to='/'>Bennoune</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><Link to='/login'>Login</Link></a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="#"><Link to='/signup'>Signup</Link></a>
                </li>
              </ul>
              
            </div>
            </div>
            
          </nav>
            </div>
            
        )
    }
}

export default Navbar;