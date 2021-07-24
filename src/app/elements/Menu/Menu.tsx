import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { MenuItem as MenuItemType, MenuItems } from './types';

import { useVisible } from './hooks';
import { useStyles } from './Menu.styles';

import { MenuHidden } from './hidden';

export const Menu: FC<MenuItems> = ({ menuItems }: MenuItems): ReactElement => {

    const classes = useStyles();

    const itemsVisibleLen = useVisible();

    const hiddenItems = menuItems.slice(itemsVisibleLen);

    return (
        <nav className={classes.container}>
            {menuItems.slice(0, itemsVisibleLen).map(({ title, link, qty }: MenuItemType) => (
                <span className={classes.item} key={link}>
                    <NavLink to={link}>{title}</NavLink>
                    {qty && <i>{qty}</i>}
                </span>
            ))}
            {hiddenItems.length > 0 && <MenuHidden menuItems={hiddenItems} />}
        </nav>
    );
};

Menu.defaultProps = {
    menuItems: []
};
