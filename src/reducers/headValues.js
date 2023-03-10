const INITIAL_STATE = {
    first: "binary",
    second: "decimal"
}
export default (state = INITIAL_STATE, action) => {
    // console.log("reducer", state);
    switch (action.type) {

        case 'CHANGE_FIRST': {
            // return {
            //     first: action.payload,
            //     second: state.second
            // }
            return {...state,first:action.payload}
        }
        case "CHANGE_SECOND": {
            // const newState= {
            //     first: state.first,
            //     second: action.payload
            // }
            return { ...state, second: action.payload }
        }
        case "SWAP":{
             return {
                first: state.second,
                second: state.first
            }

        }
        default:
            return state
    }
}