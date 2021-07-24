import React, { FC, useMemo, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Breadcrumbs as BreadcrumbsRaw } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { useStyles } from './Breadcrumbs.styles';

type BreadcumbsItem = {
    link: string;
    title: string;
};

type BreadcrumbsItems = {
    items: BreadcumbsItem[];
};

export const Breadcrumbs: FC<BreadcrumbsItems> = ({ items }: BreadcrumbsItems): ReactElement => {

    const classes = useStyles();

    const { topItem, navItems } = useMemo(() => {
        const [topItem] = items.slice(-1);
        const navItems = items.slice(0, items.length - 1);
        return { topItem, navItems };
    }, [items]);

    return (
        <div className={classes.container}>
            <BreadcrumbsRaw separator={<NavigateNextIcon fontSize="inherit" htmlColor="#6C737D" />} aria-label="breadcrumb">
                {navItems.map(({ link, title }) => (<NavLink color="textPrimary" to={link} key={link}>{title}</NavLink>))}
                <span>{topItem && topItem.title}</span>
            </BreadcrumbsRaw>
        </div>
    );
};

Breadcrumbs.defaultProps = {
    items: [
        {
            link: '/',
            title: 'Главнвя'
        }
    ],
};
