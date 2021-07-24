import React, { FC, ReactElement, ReactNode } from 'react';
import { Header, Footer, Menu } from '../../elements';
import { useStyles } from './Layout.styles';
import { menuItems } from './Layout.menu';

const defaultFunc = () => null;
const MenuItemsMain = menuItems.map(({ title, link }) => ({ title, link }));

type LayoutType = {
    children?: ReactNode;
};

export const Layout: FC<LayoutType> = ({ children }: LayoutType): ReactElement => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Header isLoggedIn={false} onLogin={defaultFunc} onLogout={defaultFunc} >
                <div className={classes.menuContainer}>
                    <Menu menuItems={MenuItemsMain} />
                </div>
            </Header>
            <main className={classes.content}>
                {children}
            </main>
            <Footer routeBase="/" menuItems={MenuItemsMain} />
        </div>
    );
};

