import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const setMuscleGroups = (state, action) => {
    return updateObject(state, {
        muscles: action.muscles
    });
};


const initialState = {
    muscles: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MUSCLE_GROUPS: return setMuscleGroups(state, action);
        default: return state;
    }
};

export default reducer;