import { useMemo } from 'react';
import { useTheme } from '@material-ui/core';
import { useWindowWidth } from '@react-hook/window-size';

export const useVisible = (): number => {

    const theme = useTheme();

    const averageItemWidth = 120;
    const averageContentPads = 220;

    const windowWidth = useWindowWidth();
    const maxContentWidth = theme.breakpoints.values.lg;
    const contentWidth = windowWidth >= maxContentWidth ? maxContentWidth : windowWidth - averageContentPads;
    
    return useMemo(() => Math.max(0, Math.trunc(Math.max(0, contentWidth) / averageItemWidth)), [contentWidth]);
};
