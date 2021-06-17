import React from 'react';
import { render } from 'react-dom';

import App from './app/App';

import { AuthProvider } from './app/./context';

render(
    <AuthProvider>
        <App />
    </AuthProvider>
    , document.getElementById('root')
)
