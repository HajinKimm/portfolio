import React from 'react';
import menuList from '../assets/api/menuList.json'
import { Link } from 'react-router-dom';
const Menu = () => {
    const onURL =(e,top)=>{
        e.preventDefault();
        scroll({
            top:top,
            behavior:"smooth"
        })
    }
    return (
        <nav>
            <ul>
                {menuList.map(item=><li key={item.id}>
                    <Link href={item.url} onClick={(e)=>onURL(e, item.top)}>{item.name}</Link>
                    
                </li>)}
            </ul>
        </nav>
    );
};

export default Menu;