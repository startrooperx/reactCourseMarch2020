import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/.actionTypes';
import {logOutSaga} from './auth';

function * watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOG_OUT, logOutSaga);
}