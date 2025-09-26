// Navegação principal (migrado de App.js)
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Easing, StatusBar } from 'react-native';
import { TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import MoreScreen from '../screens/MoreScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />

      <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            cardOverlayEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            transitionSpec: {
              open: {
                animation: 'timing',
                config: {
                  duration: 700,
                  easing: Easing.out(Easing.poly(1)),
                },
              },
              close: {
                animation: 'timing',
                config: {
                  duration: 800,
                  easing: Easing.in(Easing.poly(2)),
                },
              },
            },
          }}
        />

        <Stack.Screen
          name="More"
          component={MoreScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: {
                opacity: current.progress,
              },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
