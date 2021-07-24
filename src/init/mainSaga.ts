import { all, call, spawn, delay } from 'redux-saga/effects';
import { importAll } from './init.utils';

const reqContext = require.context('../app/components', true, /\.saga\.ts/);

const modules = importAll(reqContext);

const watchers = modules
    .map(({ path, module }) => {
        const { watch } = module;
        if (watch) return watch;
        console.log('watcher missing ' + path);
    })
    .filter(watch => watch);

export function* mainSaga(): Generator {
    yield all([...watchers].map(saga =>
        spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                } catch (e) {
                    console.log(e)
                    yield delay(1000);
                }
            }
        }))
    );
}