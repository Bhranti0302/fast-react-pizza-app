// ProtectedWeb.jsx
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedWeb({ children }) {
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) navigate('/');
  }, [username, navigate]);

  if (!username) return null;

  return children;
}

export default ProtectedWeb;
