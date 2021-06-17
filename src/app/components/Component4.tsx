import React, { FC, useContext } from 'react';
import { UserContext } from '../context';

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

    const useAuth = () => useContext(UserContext);
    const loggedIn = useAuth();

    return (
        <button style={styles[type]} type={'button'}>
            {loggedIn ? 'Войти' : 'Выйти'}
        </button>
    )
};


Component4.defaultProps = {};

export default Component4;