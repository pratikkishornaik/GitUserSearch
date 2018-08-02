import axios from 'axios';
export const fetchUser='fetchUser';

const URL=`https://api.github.com/search/users`;

export function callApi(query) {
  console.log("call API",query);
  let request=axios.get(`${URL}?q=${query}`);
 
  return(dispatch)=>{
    request.then(({data})=>{
      dispatch({
        type:fetchUser,
        payload:data
      })
    })
  }
  
  
    // return(dispatch)=> {
    //   request.then(({data})=>{
    //     dispatch({
    //       type: fetchUser,
    //       payload:data})
    //   });
    // };
  
  }


