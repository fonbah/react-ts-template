import React, { FC, useMemo, useState, ReactElement, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { Popover, MenuItem, IconButton } from '@material-ui/core';
import { nanoid } from 'nanoid';

import { MenuItem as MenuItemType, MenuItems } from '../types';

import { useStyles } from '../Menu.styles';
import { useStyles as useStylesHidden } from './Hidden.styles';

export const MenuHidden: FC<MenuItems> = ({ menuItems }: MenuItems): ReactElement => {

    const classes = useStyles();
    const classesHidden = useStylesHidden();

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const openId = useMemo(() => nanoid(), []);
    const id = open ? openId : undefined;

    const classesRoot = { root: classesHidden.root };

    return (
        <>
            <IconButton aria-describedby={id} onClick={handleClick}>
                <span className={classesHidden.hiddenMenu}>
                    <i>{menuItems.length}</i>
                </span>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{
                    style: {
                        width: '20ch',
                        paddingBottom: 20,
                    },
                }}
            >
                {menuItems.map(({ title, link, qty }: MenuItemType) => (
                    <MenuItem onClick={handleClose} key={link} component={'span'} classes={classesRoot}>
                        <span className={classes.item}>
                            <NavLink to={link}>{title}</NavLink>
                            {qty && <i>{qty}</i>}
                        </span>
                    </MenuItem>
                ))}
            </Popover>
        </>
    );
};

MenuHidden.defaultProps = {
    menuItems: []
};
