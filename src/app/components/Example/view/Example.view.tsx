import React, { FC } from 'react';

import { ExampleType } from '../ducks/Example.slice';

export const ExampleView: FC<ExampleType> = ({ content }: ExampleType) => {

    return (
        <>
            {content}
        </>
    )
};

