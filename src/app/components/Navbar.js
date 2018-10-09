import React from 'react';
import { Link} from 'react-router-dom';


class Navbar extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/login/'>login</Link></li>
                    <li><Link to='/signup/'>signup</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;