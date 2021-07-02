import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    backgroundColor: 'black',
  },
  repoList: {
    marginTop: 10,
    padding: 3,
  },
  repo: {
    borderBottomWidth: 2,
    borderColor: 'blue',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 2,
  },
  repoText: {
    marginRight: 10,
    textAlign: 'center',
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 30,
    justifyContent: 'center',
    color: 'white',
  },
  image: {
    height: 30,
    marginRight: 10,
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 30,
  },
  SearchBar: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  textInput: {
    marginRight: 10,
    flexBasis: 200,
    flexGrow: 1,
  },
});
