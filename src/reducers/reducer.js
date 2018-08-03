
import {fetchUser, fetchRepo, sortData, loader} from '../action/actions';
const init={
    userData:[],
    repoData:[],
    loading:false,
    total_results:0,
    query:' ',
};

export function rootReducer(state=init,action){

    switch(action.type){

        case fetchUser:
        {   
            let response=action.payload.items.slice();
            return{...state,userData:(response),loading:false,total_results:action.payload.total_count,query:action.query};
        }

        case fetchRepo:
        {   
            let response;
            response=action.payload.slice();  
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
