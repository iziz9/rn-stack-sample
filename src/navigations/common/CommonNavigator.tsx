import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screen/LoginScreen';
import SignupScreen from '../../screen/SignupScreen';

const Stack = createStackNavigator();
function CommonNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'LOGIN'} component={LoginScreen} />
      <Stack.Screen name={'SIGNUP'} component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default CommonNavigator;
