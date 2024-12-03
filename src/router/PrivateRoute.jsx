import { useContext } from 'react'
import { AuthContext } from '../auth/';
import { Navigate, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    //useMemo or useEffect: to save the last path. Not re-rendering the component, just saving.
    const lastPath = `${pathname}${search}`;
    localStorage.setItem('lastPath', lastPath);

    return (logged ? children : <Navigate to="/login" />) // or <Redirect to="/login" /> if you are using react-router-dom v5
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
