import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/LoginSignUpScreens/Login';
import Welcome from './src/screens/LoginSignUpScreens/Welcome';
import RootNavigation from './src/RootNavigation';

export default function App() {
  return (
    <RootNavigation/>
    // <View style={styles.container}>
    //   {/* <Welcome/> */}
    //   <Login/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
