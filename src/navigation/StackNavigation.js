import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from '../navigation/TabNavigation';
import Details from '../containers/Details';

const Stack = createStackNavigator();

function StackNavigaiton() {
    return (
        <Stack.Navigator initialRouteName="Home" 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4CB6ED',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} >
          <Stack.Screen name="Home" component={TabNavigation} />
          <Stack.Screen name="Details" component={Details} options={{ title: 'Details' }}  />
      </Stack.Navigator>
    );
  }
  export default StackNavigaiton;