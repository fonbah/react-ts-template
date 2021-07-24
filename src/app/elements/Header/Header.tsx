import React, { FC, ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import BatteryCharging20Icon from '@material-ui/icons/BatteryCharging20';

import { useStyles } from './Header.styles';

type HeaderType = {
    children?: ReactNode;
    isLoggedIn: boolean,
    onLogin: () => void,
    onLogout: () => void,
};

export const Header: FC<HeaderType> = ({ children, isLoggedIn, onLogin, onLogout }: HeaderType): ReactElement => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Link to="/">
                <span className={classes.logo}></span>
            </Link>
            <header className={classes.header}>
                {children}
            </header>
            <span className={classes.login_btn}>
                {isLoggedIn ?
                    <Button startIcon={<ExitToApp />} onClick={onLogout}>Выйти</Button> :
                    <Button startIcon={<BatteryCharging20Icon />} onClick={onLogin}>Charge</Button>
                }
            </span>
        </div>
    );
};
