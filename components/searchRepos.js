import React from 'react';
export const searchRepos = (repoList, text) => {
  let result = [];
  for (let ind in repoList) {
    if (repoList[ind].name.startsWith(text) === true) {
      result.push(repoList[ind]);
    }
  }
  return result;
};
