const INITIAL_STATE = {
    arr: []
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
        default:
            return state
    }
}

export default productReducer