import React, { FC, HtmlHTMLAttributes, ReactElement, ReactNode, MouseEvent, FocusEvent } from 'react';

export type propTypes = {
    title?: string;
    children: ReactNode;
    onClick: (e: MouseEvent) => void;
    extends: HtmlHTMLAttributes<HTMLDivElement>
}

const Component2: FC<propTypes> = ({ children, title, onClick, ...rest }: propTypes): ReactElement => {

    const onFocus = (e: FocusEvent) => { console.log(e) };

    return (
        <div onClick={onClick} onFocus={onFocus} {...rest.extends}>
            {title} : {children}
        </div>
    )
};


Component2.defaultProps = {
    title: 'Default title!',
};

export default Component2;