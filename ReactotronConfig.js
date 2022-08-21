import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

export default Reactotron
  .configure({ host: '192.168.1.3' })
  .useReactNative()
  .use(reactotronRedux())
  .connect();