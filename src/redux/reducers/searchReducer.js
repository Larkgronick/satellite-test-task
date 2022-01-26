import { SET_SEARCH_RESULTS, setSearchResults  } from "../actions/actions";

const initialState = {
    results: [],
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_RESULTS: {
            return {
                ...state,
                results: action.payload
            };
        }
        default:
            return state;
    }
}

export const loadResults = (value) => async (dispatch, getState) => {
    const results = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`).then(res => res.json());
    dispatch(setSearchResults(results));
}
