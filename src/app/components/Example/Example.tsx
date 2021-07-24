import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mounted, ExampleType } from './ducks/Example.slice';

import { ExampleView } from './view/Example.view';

export const Example: FC<ExampleType> = ({ content }: ExampleType) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mounted());
    }, []);

    return <ExampleView content={content} />
}

Example.defaultProps = {
    content: 'App template'
};