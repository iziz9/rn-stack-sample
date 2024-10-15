import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
const Stack = createStackNavigator();
function MembersNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'MainTabNavigator'}
        component={MainTabNavigator}
        options={{
          headerTitle: '', //뒤로가기에 이름 안보이게
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MembersNavigator;
