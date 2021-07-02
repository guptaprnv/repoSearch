import React, {Component} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles.js';
export const SearchBar = props => {
  return (
    <View style={styles.SearchBar}>
      <TextInput
        style={styles.textInput}
        value={props.searchText}
        onChangeText={props.handleChange}
        placeholder="searchrepo"
      />
      <TouchableOpacity style={styles.button} onPress={props.handlePress}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};
