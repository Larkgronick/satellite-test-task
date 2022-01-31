export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_LOADING = 'SET_LOADING';
export const SET_STATUS = 'SET_STATUS';

export const setSearchResults = (results) => ({
    type: SET_SEARCH_RESULTS,
    payload: results,
});

export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading,
})

export const setStatus = (loading) => ({
    type: SET_STATUS,
    payload: loading,
})
