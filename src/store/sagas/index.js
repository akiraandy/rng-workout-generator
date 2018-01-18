import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { initMuscleGroupsSaga } from './muscleList'

export function* watchMuscleGroups() {
    yield takeEvery(actionTypes.INIT_MUSCLE_GROUPS, initMuscleGroupsSaga);
}