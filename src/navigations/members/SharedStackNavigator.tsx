import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from '../../screen/MapScreen';
import MatzipListScreen from '../../screen/MatzipListScreen';
import MyPageScreen from '../../screen/MyPageScreen';
import AdditionalScreen from '../../screen/AdditionalScreen';

const Stack = createStackNavigator();
export default function SharedStack({
  screenName,
}: {
  screenName: 'Map' | 'MatzipList' | 'MyPage';
}) {
  return (
    <Stack.Navigator>
      {screenName === 'Map' ? (
        <Stack.Screen name={'Map'} component={MapScreen} />
      ) : null}
      {screenName === 'MatzipList' ? (
        <Stack.Screen name={'MatzipList'} component={MatzipListScreen} />
      ) : null}
      {screenName === 'MyPage' ? (
        <Stack.Screen name={'MyPage'} component={MyPageScreen} />
      ) : null}

      <Stack.Screen name={'Additional'} component={AdditionalScreen} />
    </Stack.Navigator>
  );
}
