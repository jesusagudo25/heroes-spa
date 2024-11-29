import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';
import { useContext } from 'react';


export const Navbar = () => {

    /*     
        const { pathname: currentLocation } = useLocation();
    */    
   const navigate = useNavigate();

   const { user, logout } = useContext(AuthContext);

    const onLogout = () => {
        //navigate('/login');
        logout();
        navigate('/login', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Associations
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}` }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        {user?.name}
                    </span>

                    <button
                        size="sm"
                        className="nav-item nav-link btn btn-outline-danger"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}