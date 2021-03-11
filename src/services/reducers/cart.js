import { ADD_TO_CART } from '../constants'
import { REMOVE_TO_CART } from '../constants'

const initialState = {
    catrData: [],
    userData: [],
};

export default function manageCartData(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            // return Object.assign({}, state, {
            //     catrData: state.catrData.concat(action.data)
            // });
            return {
                catrData: [...state.catrData, action.data]
              };
            break;

        case REMOVE_TO_CART:
            return Object.assign({}, state, {
                catrData: [...state.catrData.filter((data, i) => i !== action.id)],
              });
            break;

        default:
            return state
            break;
    }
}