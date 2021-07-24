import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

type PrivateRouteType = {
    //eslint-disable-next-line
    component: any;
    path: string;
    //eslint-disable-next-line
    [x: string]: any;
    children?: never;
};

export const PrivateRoute: FC<PrivateRouteType> = ({ component: Component, ...rest }) => {

    const isAuthorized = true;

    return (
        <Route {...rest} render={
            props => isAuthorized ?
                (<Component {...props} />) :
                (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
        } />
    )
}
