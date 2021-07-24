import { takeEvery } from 'redux-saga/effects';
import { mounted } from './Example.slice';

function* requestSaga(): Generator {
    yield 1;
}

export function* watch(): Generator {
    yield takeEvery(mounted, requestSaga);
}
