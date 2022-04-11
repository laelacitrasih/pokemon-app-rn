import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Detail from './components/Detail';
import styles from './assets/styles';
import store from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar animated={true} backgroundColor="transparent" barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}


