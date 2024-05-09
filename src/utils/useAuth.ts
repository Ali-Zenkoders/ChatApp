import {useDispatch} from 'react-redux';
import {setLogout, setUserData} from '../store/slices/userSlice';

export const useAuth = () => {
  const dispatch = useDispatch();

  const handleSignin = (userId: number, userName: string, token: string) => {
    console.log('user id: ', userId);
    // dispatch(setUserData({id: userId, name: userName, token}));
  };

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return {handleSignin, handleLogout};
};
