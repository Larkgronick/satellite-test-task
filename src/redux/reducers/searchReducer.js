import { SET_SEARCH_RESULTS, SET_LOADING, SET_STATUS, setStatus, setSearchResults, setLoading  } from "../actions/actions";

const initialState = {
    results: [],
    loading: false
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_RESULTS: {
            return {
                ...state,
                results: action.payload
            };
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.payload
            }
        }
        default:
            return state;
    }
}

export const loadResults = (value) => async (dispatch, getState) => {
    const results = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`).then(res => res.json());
    // add load error processing 
    dispatch(setStatus('Search is completed. See Result Tab'));
    dispatch(setSearchResults(results));
    dispatch(setLoading(false))
}