import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from './components/SearchBar';
import {ShowRepoList} from './components/ShowRepoList';
import {fetchRepoList} from './fetchRepoList';
import {searchRepos} from './components/searchRepos';
import {styles} from './components/styles';
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedRepoList: [],
      searchText: '',
      repoList: [],
    };
  }
  async componentDidMount() {
    try {
      const repoList = await fetchRepoList();
      this.setState({
        repoList: repoList,
        searchedRepoList: repoList,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = text => {
    this.setState({
      searchText: text,
    });
  };

  handlePress = () => {
    const text = this.state.searchText;
    const repoList = this.state.repoList;
    const searchedRepoList = searchRepos(repoList, text);
    this.setState({
      searchText: '',
      searchedRepoList: searchedRepoList,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          handleChange={this.handleChange}
          handlePress={this.handlePress}
          searchText={this.state.searchText}
        />
        <ShowRepoList repoList={this.state.searchedRepoList} />
      </View>
    );
  }
}

export default App;
