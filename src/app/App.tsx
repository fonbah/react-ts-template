import React, { FC } from 'react';

import Component from './components/Component';
import Component2 from './components/Component2';
import Component4 from './components/Component4';

const App: FC = () => (
    <>
        <Component content={'Component text!'} />
        <Component2 title={'Component2 title!'} onClick={() => null} extends={{ className: 'comp', tabIndex: 1 }} >child</Component2>
        <Component4 type={'success'} />
    </>
);

export default App;