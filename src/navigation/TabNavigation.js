
import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatScreen from '../containers/chat/ChatScreen';
import GameScreen from '../containers/game/GameScreen';
import NotificationScreen from '../containers/notification/NotificationScreen';
import ProfileScreen from '../containers/profile/ProfileScreen';
import SettingScreen from '../containers/setting/SettingScreen';


const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
    <Tab.Navigator>
            <Tab.Screen name="Oyunlar" component={GameScreen} />
            <Tab.Screen name="Mesajlar" component={ChatScreen} />
            <Tab.Screen name="Bildirimler" component={NotificationScreen} />
            <Tab.Screen name="Profil" component={ProfileScreen}/>
            <Tab.Screen name="Ayarlar" component={SettingScreen} />
        </Tab.Navigator>
        );
  }
  
  export default TabNavigation;