import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { initStore } from '../init/store';
import { Router } from './router';
import { theme } from './theme';

const initState = {};

const store = initStore(initState);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const App: FC = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router />
        </ThemeProvider>
    </Provider>
);
