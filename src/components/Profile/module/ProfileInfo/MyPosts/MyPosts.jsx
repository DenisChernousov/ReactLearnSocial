import React from 'react';
import s from './UserInfo.module.css';
const UserInfo = (props) => {
    return (
        <div className={s.items}>
            <div className={s.name}>Mr. No Name</div>
            <div className={s.item}>Date of Birth: 30 february</div>
            <div className={s.item}>City: Ulanbator</div>
            <div className={s.item}>Education: UGU'97</div>
            <div className={s.item}>Web-site: http://noname.no</div>
        </div>
    );
}

export default UserInfo;