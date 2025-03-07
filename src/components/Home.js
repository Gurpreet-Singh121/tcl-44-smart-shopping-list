import { getToken } from '@the-collab-lab/shopping-list-utils';
import { useNavigate, Navigate } from 'react-router-dom';
import ShareTokenForm from './ShareTokenForm';
import useToken from '../hooks/useToken';

const Home = () => {
  let navigate = useNavigate();
  const { setToken } = useToken();

  const createToken = () => {
    const newToken = getToken();
    if (localStorage.getItem('token') === null) {
      localStorage.setItem('token', newToken);
      setToken(newToken);
    }
    navigate('/list');
  };

  if (localStorage.getItem('token')) {
    return <Navigate to="/list" />;
  }

  return (
    <section>
      <h1>Welcome to your Smart Shopping List</h1>
      <button onClick={createToken}>Create new List</button>

      <p>- or -</p>
      <p>Join an existing shopping list by entering a three word token.</p>

      <ShareTokenForm setToken={setToken} />
    </section>
  );
};

export default Home;
