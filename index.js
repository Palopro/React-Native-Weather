/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Setup from './src/store/setup';

AppRegistry.registerComponent(appName, () => Setup);
