import React, { useCallback, FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { useStyles } from './Footer.styles';

type MenuItem = {
    title: string;
    link: string;
};

type FooterType = {
    routeBase: string;
    menuItems: MenuItem[];
};

export const Footer: FC<FooterType> = ({ routeBase, menuItems }: FooterType): ReactElement => {

    const classes = useStyles();
    const currentYear = useCallback(() => (new Date().getFullYear()), []);

    return (
        <div className={classes.container}>
            <footer className={classes.footer}>
                <div>
                    © {currentYear()}
                </div>

                <div>
                    <Typography variant="h4" color="textSecondary">Company name</Typography>
                    <div>
                        {menuItems.map(({ title, link }) => (
                            <span key={title}>
                                <NavLink to={link}>{title}</NavLink>
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <Typography variant="h4" color="textSecondary">Связаться с нами</Typography>
                    <div>
                        <Typography variant="body1" color="textSecondary">
                            <a href={`${routeBase}/Политика конфиденциальности.pdf`} download>
                                Политика конфиденциальности
                            </a>
                        </Typography>
                    </div>
                </div>

            </footer>
        </div>
    );
};

Footer.defaultProps = {
    routeBase: '/',
    menuItems: [],
};