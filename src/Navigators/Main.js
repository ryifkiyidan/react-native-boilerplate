import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExampleContainer } from '@/Containers';
import { NAVIGATION } from '@/Utils/Constants';
import { HomeMain } from '@/Screens/Home';

const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={ExampleContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name={NAVIGATION.HOME.HomeMain}
        component={HomeMain}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
