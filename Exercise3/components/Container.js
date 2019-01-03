import React from 'react';

import { SafeAreaView, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native';
import {DismissKeyboardView} from '../HOC/DismissKeyboardView'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333542',
    flex: 1,
  },
});

export const Container = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <KeyboardAvoidingView
      keyboardVerticalOffset={10}
      behavior="position"
      enabled
    >
      <DismissKeyboardView>
      {children}
      </DismissKeyboardView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);
