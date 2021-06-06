import React, { FC, useState } from 'react';

type propTypes = {
    content?: string;
    children?: never;
}

const Component: FC<propTypes> = ({ content }: propTypes) => {

    const [counter, setCounter] = useState<number>(0);

    const increment = (): void => {
        setCounter(prev => prev + 1);
    };

    const decrement = (): void => {
        setCounter(prev => prev - 1);
    };

    return (
        <>
            {content}
            {counter.toFixed()}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
};


Component.defaultProps = {
    content: 'Default text!',
};

export default Component;