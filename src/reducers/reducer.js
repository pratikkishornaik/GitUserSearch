
import {fetchUser, fetchRepo, sortData, loader} from '../action/actions';
const init={
    userData:[],
    repoData:[],
    loading:false,
};

export function rootReducer(state=init,action){

    switch(action.type){
        case fetchUser:
        {   //console.log(action.payload.items);
            let response=action.payload.items.slice();
            return{...state,userData:(response),loading:false};
        }

        case fetchRepo:
        {   let response;
             response=action.payload.slice();  
             console.log("resp=",response,"action=",action);
            return{...state,repoData:state.repoData.concat(response)};
        }
        case sortData:
        {   
            let userData=action.payload.slice();
            return {...state,userData:userData};
        }
        
        case loader:
        {
            return{...state,loading:true};
        }

        default:
        return state
    }
}
