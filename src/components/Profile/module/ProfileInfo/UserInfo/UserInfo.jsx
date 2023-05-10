import React from 'react';
import s from './Aatar.module.css';
import AvatarImg from './img/NoName.jpg';
const Avatar = (props) => {
    return (
        <div className={s.items}>
            <img src={AvatarImg} alt="" />
        </div>
    );
}

export default Avatar;