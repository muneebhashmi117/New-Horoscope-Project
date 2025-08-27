/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unstable-nested-components */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN} from '../enums/AppEnums';
import * as ui from '../screens';
import CustomStatusBar from '../components/customStatusBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomBar} from '../components';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomBar {...props} />} // custom bar
    >
      <Tab.Screen name={SCREEN.HOME_SCREEN} component={ui.HomeScreen} />
      <Tab.Screen name={SCREEN.BOOKINGS_SCREEN} component={ui.Bookings} />
      <Tab.Screen name={SCREEN.REWARDS_SCREEN} component={ui.Rewards} />
      <Tab.Screen name={SCREEN.SEARCH_SCREEN} component={ui.SearchPage} />
      <Tab.Screen name={SCREEN.PROFILE_SCREEN} component={ui.Profile} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <CustomStatusBar />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREEN.LOGIN_SCREEN} component={ui.LoginScreen} />
        <Stack.Screen name={SCREEN.BOTTOM} component={BottomTabs} />
        <Stack.Screen name={SCREEN.SIGNUP_SCREEN} component={ui.SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
