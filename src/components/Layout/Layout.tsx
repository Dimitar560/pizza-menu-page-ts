import React from 'react'; 

import style from './Layout.module.css';

type childProp = {
    children:React.ReactNode
}

export default function Layout({children} : childProp) {
    
    return (
        <div className={style.layout}>
            <div className={style.container}>
                {children}
            </div>
        </div>
    );

}