import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    return (
        <div className={s.items}>
            <p>My Posts</p>
            <div className={s.text}>
                <textarea name="" id="" cols="150" rows="10"></textarea>
            </div>
            <div className={s.btn}>
                <button>Send</button>
            </div>
        </div>
    );
}

export default MyPosts;