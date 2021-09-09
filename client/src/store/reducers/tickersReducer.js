export const FETCH_TICKERS = "FETCH_TICKERS";
export const FETCH_TICKERS_SUCCESS = "FETCH_TICKERS_SUCCESS";
export const FETCH_TICKERS_ERROR = "FETCH_TICKERS_ERROR";

const initialState  = {
    tickers: [],
    loading: false,
    error: null
};

export const tickersReducer =(state = initialState, action) => {
    switch(action.type){
        case FETCH_TICKERS:
            return {...state, loading: true };
        case FETCH_TICKERS_SUCCESS:
            return {...state, loading: false, tickers:[ ...action.payload] };
        case FETCH_TICKERS_ERROR:
            return {...state,error: action.payload };
        default:
            return state
    }
};