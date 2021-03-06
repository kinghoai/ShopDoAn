import React, { Component } from 'react';
import { StatusBar} from 'react-native';
import { Authentication } from './components/Authentication/Authentication';
import { ChangeInfo } from './components/ChangeInfo/ChangeInfo';
import { Main } from './components/Main/Main';
import { OrderHistory } from './components/OrderHistory/OrderHistory';
import { StackNavigator } from 'react-navigation';

StatusBar.setHidden(true);


export const App = StackNavigator({
  Main: { screen: Main },
  Authentication: { screen: Authentication },
  ChangeInfo: { screen: ChangeInfo },
  OrderHistory: { screen: OrderHistory },
}, { headerMode: 'none' });

