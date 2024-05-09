import React from 'react';
import AuthNavigator from './AuthNavigator';
import DashboardNavigator from './DashboardNavigator';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

const RootStack = () => {
  const user = useSelector((state: RootState) => state.user);

  return user ? <DashboardNavigator /> : <AuthNavigator />;
};

export default RootStack;
