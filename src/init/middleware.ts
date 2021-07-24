import { Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const devEnv = process.env.NODE_ENV === 'development';

const middleware: Middleware[] = [sagaMiddleware];

if (devEnv) {
  const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
      title: (action): string => (action.error ? 'firebrick' : 'deepskyblue'),
      prevState: (): string => '#1C5FAF',
      action: (): string => '#149945',
      nextState: (): string => '#A47104',
      error: (): string => '#ff0005',
    },
  });
  middleware.push(logger);
}

export { middleware, sagaMiddleware };
