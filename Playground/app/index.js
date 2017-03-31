import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Realm from 'realm';
import createRealm from './models/realm'
import setupRealm from './models/realm-setup'

let realm = createRealm()
setupRealm(realm)

class App extends Component {
    render() {
        return (
          <View>
            <Text>
              Count of Games in Realm: {realm.objects('Game').length}
            </Text>
          </View>
        );
    }
}

export default App
