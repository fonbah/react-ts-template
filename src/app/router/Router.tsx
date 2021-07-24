import React, { FC } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import { history } from '../../init/store';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { MainLayout } from '../layout';
import { Example } from '../components/Example';

type RouterType = {
    children?: never;
};

export const Router: FC<RouterType> = () => {

    return (
        <ConnectedRouter history={history}>
            <ErrorBoundary>
                <MainLayout>
                    <Switch>
                        <Route path="/" component={Example} />
                        <Route render={() => (<h1>404</h1>)} />
                    </Switch>
                </MainLayout>
            </ErrorBoundary>
        </ConnectedRouter>
    );
}