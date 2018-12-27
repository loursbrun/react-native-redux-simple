import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';

import {
  testAction,
} from './redux';

import { Provider } from 'react-redux';
import { store } from './redux';

class AppInner extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Button title="Test" onPress={this.props.testAction}></Button>
          <Text> {this.props.content}</Text>
        </View>
    );
  }
}

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// AppContainer.js
const mapStateToProps = (state) => ({
  content: state.dvas0004.content || "Please Wait...",
});

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: () => {
      dispatch(testAction())
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppInner);