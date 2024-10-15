import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SharedStack from './SharedStackNavigator';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MapTab"
        options={{
          headerTitle: '',
          headerShown: false,
        }}>
        {() => <SharedStack screenName={'Map'} />}
      </Tab.Screen>
      <Tab.Screen
        name="MatzipListTab"
        options={{
          headerTitle: '',
          headerShown: false,
        }}>
        {() => <SharedStack screenName={'MatzipList'} />}
      </Tab.Screen>
      <Tab.Screen
        name="MypageTab"
        options={{
          headerTitle: '',
          headerShown: false,
        }}>
        {() => <SharedStack screenName={'MyPage'} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
