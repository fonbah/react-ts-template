import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { importAll } from './init.utils';

const reqContext = require.context('../app/components', true, /\.slice\.ts/);

const modules = importAll(reqContext);

const allReducers = modules
    .map(({ path, module }) => {
        const { name, reducer } = module;
        if (name && reducer) return { [name]: reducer };
        const msg = name ? 'reducer' : 'name'; console.log(`${msg} missing ${path}`);
    })
    .filter(reducer => reducer)
    .reduce((prev, next) => {
        return { ...prev, ...next };
    }, {});

export const initRootReducer = (history: History): Reducer => combineReducers({
    ...allReducers,
    router: connectRouter(history),
});

