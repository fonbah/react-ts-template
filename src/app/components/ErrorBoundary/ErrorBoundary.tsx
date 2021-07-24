import React, { Component, ErrorInfo, ReactNode, ReactNodeArray } from 'react';

type StateType = {
    hasError: boolean;
}

type PropsType = {
    children: ReactNode | ReactNodeArray;
}

export class ErrorBoundary extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = { hasError: false };
    }

    //eslint-disable-next-line
    static getDerivedStateFromError(error: Error): StateType {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.    
        return { hasError: true };
    }

    //eslint-disable-next-line
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок    logErrorToMyService(error, errorInfo);  
    }

    render(): ReactNode | ReactNodeArray {
        if (this.state.hasError) {
            // Можно отрендерить запасной UI произвольного вида      
            return <h1>Что-то пошло не так.</h1>;
        }

        return this.props.children;
    }
}