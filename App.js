import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store'
import { init } from './db';
import AppNavigator from './navigation/AppNavigation';

init()
  .then(() => console.log('Database initialized'))
  .catch(err => {
    console.log('Database failed to connect')
    console.log(err.message)
  })

if (__DEV__) {
  import('./ReactotronConfig')
}

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
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
