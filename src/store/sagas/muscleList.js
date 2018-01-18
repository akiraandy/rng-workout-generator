import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* initMuscleGroupsSaga(action) {
    try {
        const response = yield axios.get('https://wger.de/api/v2/muscle/')
        yield console.log(response.data.results);
        yield put(actions.setMuscleGroupList(response.data.results));
        
    } catch (error) {
        yield console.log("Error occurred", error);
    }
}
