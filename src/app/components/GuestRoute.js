import React from 'react';
import { Route , Redirect } from 'react-router-dom';


const GuestRoute = ({isAuthenticated , component:Component , ...rest } ) => {
    {console.log(isAuthenticated)}
    return(
        <Route
        {...rest}
        render={props =>
            !isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Redirect to="/dashboard" />
        )}
        />
    );
    
}


export default GuestRoute;