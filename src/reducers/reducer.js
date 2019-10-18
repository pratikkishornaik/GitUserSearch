import {
  fetchUser,
  fetchRepo,
  sortData,
  loader,
  discardRepoData
} from "../action/actions";
const init = {
  userData: [],
  repoData: [],
  loading: false,
  total_results: 0,
  query: " ",
  activePage: 1
};

export function rootReducer(state = init, action) {
  switch (action.type) {
    case fetchUser: {
      let response = action.payload.items.slice();
      return {
        ...state,
        userData: response,
        loading: false,
        total_results: action.payload.total_count,
        query: action.query,
        activePage: action.activePage
      };
    }

    case fetchRepo: {
      let response = action.payload;

      return {
        ...state,
        repoData: { ...state.repoData, [response.user_id]: response.repos }
      };
    }
    case sortData: {
      let userData = action.payload.slice();
      return { ...state, userData: userData };
    }

    case loader: {
      return { ...state, loading: true };
    }

    case discardRepoData: {
      return { ...state, repoData: [] };
    }

    // case getUserRepos: {
    //   return { ...state, userData: [...state.userData, action.payload] };
    // }

    default:
      return state;
  }
}
