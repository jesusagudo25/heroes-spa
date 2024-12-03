import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const Login = () => {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    //navigate('/');
    login('JESUS AGUDO');
    navigate(lastPath,
    { replace: true });

  }
  return (
    <div className="container mt-5">

      <h1>Login</h1>

      <hr />

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  )
}
