import React from 'react'
import style from './style.module.css';
import { NavLink } from 'react-router-dom'
import { links } from './links'

export default function Nav() {

    const className = ({ isActive }) => isActive ? '' + style.active : '' + style.notactive;

    return (
        <nav className={style.nav}>
            {
                links.map(({ id, title, link }) =>
                    (<NavLink className={className} key={id} to={link}>{title}</NavLink>))
            }
        </nav>
    );
}