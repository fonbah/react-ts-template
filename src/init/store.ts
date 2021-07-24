import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createBrowserHistory } from 'history';

import { initRootReducer } from './rootReducer';
import { mainSaga } from './mainSaga';
import { middleware, sagaMiddleware } from './middleware';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

export const initStore = (preloadedState: { [x: string]: unknown; } | undefined): Store => {
    const store = createStore(initRootReducer(history), preloadedState, composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middleware)));
    sagaMiddleware.run(mainSaga);
    return store;
};
