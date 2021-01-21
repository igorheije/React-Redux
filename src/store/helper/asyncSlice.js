import { createSlice} from "@reduxjs/toolkit";

/**
 * 
 * @param {Object} config 
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 * 
 */

const createAsyncSlice = (config) => {
    const slice = createSlice({
        name: config.name,
        initialState : {
            loading: false,
            data: null, 
            error: null,
            ...config.initialState
        },
        reducers: {
            fetchStated(state){
                state.loading = true;
            },
            fetchSuccess(state, action){
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            },
            fetchError(state, action){
                state.loading = false;
                state.data = null;
                state.error = action.payload;
            },
            ...config.reducers,

        },
    })

    const {fetchStated,fetchSuccess,fetchError}= slice.actions

    const asyncAction = (payload)=> async(dispatch) =>{
        try{
            dispatch(fetchStated())
            const {url, options} = config.fetchConfig(payload)
            const response = await fetch(url, options)
            const data = await response.json()
            return dispatch(fetchSuccess(data))
        }catch(e){
            return dispatch(fetchError(e.message))
        }
    }

    return {...slice, asyncAction}
}

export default createAsyncSlice