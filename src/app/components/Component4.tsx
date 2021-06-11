import React, { FC } from 'react';

const styles = {
    primary: {
        color: 'blue',
    },
    success: {
        color: 'green',
    }
};

type StylesType = typeof styles;

type ButtonType = keyof StylesType;

interface IPropTypes {
    type: ButtonType;
}

const Component4: FC<IPropTypes> = ({ type }: IPropTypes) => {

    return (
        <button style={styles[type]} type={'button'}>
            ClickMe
        </button>
    )
};


Component4.defaultProps = {};

export default Component4;