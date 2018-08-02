
import {fetchUser} from '../action/actions';
const init={
    query:' ',
    userData:[]
};

export function rootReducer(state=init,action){
    switch(action.type){
        case fetchUser:
        {   console.log(action.payload.items);
            return{...state};
        }
        case 'userDataRecieved':
        {
           // return{...state,userData:usrdata}
        }
    }
}
// var usrdata;
//             var url=`https://api.github.com/search/users?q=${action.query}`;
//             console.log(url);

//             usrdata=(HttpService(url).then(function(response){
//                 return response.data.items.slice();
//                 }));

//             console.log("reducer",usrdata);

//             return{...state,userData:usrdata};  
//             console.log(action.query,'in-reducer');