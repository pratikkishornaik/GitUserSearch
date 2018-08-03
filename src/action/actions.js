import axios from 'axios';

export const fetchUser='fetchUser';
export const fetchRepo='fetchRepo';
export const sortData='sortData';
export const loader='callLoader';

const URL=`https://api.github.com/search/users?per_page=10`;

export function callApi(query) {
  console.log("call API",query);
  let request=axios.get(`${URL}&q=${query}`);
    return(dispatch)=>{
      request.then(({data})=>{
        console.log(data);
        dispatch({
          type:fetchUser,
          payload:data,
          query:query,
        })
      })
    }
  }

  export function getRepos(query){
    let url=`https://api.github.com/users/${query}/repos`;
    let request=axios.get(url);
    return(dispatch)=>{
      request.then(({data})=>{
        dispatch({
          type:fetchRepo,
          payload:data,
        })
      });
    }
  }

  export function sortUserData(sorttype,userData){
      switch(sorttype){
 
        case 'sortByAZ':{
          userData.sort((a,b)=>{
                let valueA, valueB;
                valueA=a.login;
                valueB=b.login;
           return valueA.localeCompare(valueB);
        });
        return{type:sortData,payload:userData};
      }
        case 'sortByZA':{
            userData.sort((a,b)=>{
              let valueA, valueB;
              valueA=a.login;
              valueB=b.login;
              return valueB.localeCompare(valueA);
            });
            return{type:sortData,payload:userData};
        }

        case 'sortByRankAsc':{
            userData.sort((a,b)=>{
                let valueA,valueB
                valueA=a.score;
                valueB=b.score;
                if(valueA<valueB){
                  return -1;
                }
                if(valueA>valueB){
                  return 1;
                }
                if(valueA==valueB){
                  return 0;
                }
            });
            return{type:sortData,payload:userData};
        }
        
        case 'sortByRankDec':{
          userData.sort((a,b)=>{
            let valueA,valueB
            valueA=a.score;
            valueB=b.score;
            if(valueB<valueA){
              return -1;
            }
            if(valueB>valueA){
              return 1;
            }
            if(valueB==valueA){
              return 0;
            }
          });
        return{type:sortData,payload:userData};
        }
        default:
        {
        return{type:sortData,payload:userData};
        }
    }
  }

export function callLoader(query){
  return {
          type:loader,
          loading:true,
          query:query,
        }
}


