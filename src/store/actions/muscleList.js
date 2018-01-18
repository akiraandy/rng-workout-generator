import * as actionTypes from './actionTypes';

export const setMuscleGroupList = (muscles) => {
    return {
        type: actionTypes.SET_MUSCLE_GROUPS,
        muscles: muscles
    };
};

export const initMusleGroupList = () => {
    return {
        type: actionTypes.INIT_MUSCLE_GROUPS
    };
};
