export const fetchRepoList = async () => {
  let url = 'https://api.github.com/search/repositories?q=stars:>100000';
  let response = await fetch(url);
  let result = await response.json();
  const repoList = result.items.map(item => {
    return item;
  });
  //console.log(repoList);
  return repoList;
};
