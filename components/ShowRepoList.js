import React, {Component} from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import {styles} from './styles.js';

const Box = props => {
  return (
    <View style={styles.repo}>
      <Text style={styles.repoText}>Repo: {props.name}</Text>
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={styles.image}
      />
      <Text style={styles.repoText}>stars: {props.stars}</Text>
    </View>
  );
};
export const ShowRepoList = props => {
  return (
    <FlatList
      style={styles.repoList}
      data={props.repoList}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <Box name={item.name} stars={item.stargazers_count} />;
      }}
    />
  );
};
