import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

function MapScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>지도</Text>
      <Button
        title="하위페이지 이동"
        onPress={() => navigation.navigate('Additional')}
      />
    </View>
  );
}

export default MapScreen;
