import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.items}>
            <div className={s.dialogs}>
                <div className={s.dialog + ' ' + s.active}><NavLink to="/dialogs/1">Taras Bulba</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/2">Volodya Sharapow</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, at dignissimos fuga impedit iste
                    iusto magnam, perferendis qui quidem rem, repudiandae totam voluptatem! Consequuntur, labore.
                </div>
            </div>
        </div>
    );
}

export default Dialogs;