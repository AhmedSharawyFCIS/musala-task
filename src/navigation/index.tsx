import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import News from '../screens/news';
import NewsDetails from '../screens/newsDetails';
import Settings from '../screens/settings';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { translate } from '../helpers';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const NewsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="news"
      component={News}
      options={{ title: translate('home') }}
    />
    <Stack.Screen name="newsDetails" component={NewsDetails} />
  </Stack.Navigator>
);
const BottomTabNavigator = () => (
  <NavigationContainer>
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home"
        component={NewsStack}
        options={{
          headerShown: false,
          tabBarLabel: translate('home'),
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={RFValue(20)} />
          ),
        }}
      />
      <BottomTab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: translate('settings'),
          headerTitle: translate('settings'),
          tabBarIcon: ({ color }) => (
            <Feather name="settings" color={color} size={RFValue(20)} />
          ),
        }}
      />
    </BottomTab.Navigator>
  </NavigationContainer>
);

export default BottomTabNavigator;
