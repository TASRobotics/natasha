import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';
import axios from 'axios';
import { UserContext, LoadingContext } from '../context';

const useAuth = () => {
  const { user, setUser } = useContext(UserContext);
  const { setLoading } = useContext(LoadingContext);
  const history = useHistory();

  const getErrorMessage = (errors: { msg: string }[]) => {
    let output = '';
    errors.forEach((error) => {
      output += error.msg;
      output += '\n';
    });
    return output;
  };

  const get = async (path: string) => {
    try {
      setLoading(true);
      const response = await axios.get(path);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      notification.error({
        message: 'Error',
        description:
          err.response.data.errors && Array.isArray(err.response.data.errors)
            ? getErrorMessage(err.response.data.errors)
            : err.response.data.msg
      });
      return false;
    }
  };

  const post = async (path: string, content: any) => {
    try {
      setLoading(true);
      const response = await axios.post(path, content);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      notification.error({
        message: 'Error',
        description:
          err.response.data.errors && Array.isArray(err.response.data.errors)
            ? getErrorMessage(err.response.data.errors)
            : err.response.data.msg
      });

      return false;
    }
  };

  const patch = async (path: string, content: any) => {
    try {
      setLoading(true);
      const response = await axios.patch(path, content);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      notification.error({
        message: 'Error',
        description:
          err.response.data.errors && Array.isArray(err.response.data.errors)
            ? getErrorMessage(err.response.data.errors)
            : err.response.data.msg
      });

      return false;
    }
  };

  const storeToken = (token: string) => {
    axios.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token', token);
  };

  const setAuth = async (token?: string) => {
    if (token) {
      storeToken(token);
      const user = await get('/auth');
      if (user) {
        storeToken(token);
        setUser(user);
        return user;
      }
    }
    delete axios.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
    setUser(undefined);
    return false;
  };

  const login = async (content: object) => {
    const { token } = await post('/auth', content);
    if (!token) return;
    await setAuth(token);
    history.push('/dashboard');
  };

  const register = async (content: object) => {
    const { token } = await post('/users', content);
    if (!token) return;
    await setAuth(token);
    history.push('/dashboard');
  };

  const editUser = async (content: object) => {
    const newUser = await patch('/users', { ...user, ...content });
    if (!newUser) return false;
    setUser(newUser);
  };

  const sendMessage = async (content: object) => {
    return await post('/message', content);
  };

  const makeDonation = async (content: object) => {
    return await post('/donation', content);
  };

  const setAdmin = async (key: string) => {
    if (key) {
      axios.defaults.headers.common['admin-key'] = key;
      localStorage.setItem('adminKey', key);
      const adminData = await get('/admin');
      if (adminData) return adminData;
    }
    delete axios.defaults.headers.common['admin-key'];
    localStorage.removeItem('adminKey');
    return false;
  };

  return {
    setAuth,
    login,
    register,
    editUser,
    sendMessage,
    makeDonation,
    setAdmin
  };
};

export { useAuth };
