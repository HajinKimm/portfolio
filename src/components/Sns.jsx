import React from 'react';
import {BsGithub} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const snsList = [
    {id:1, icon:<BsGithub/>, title:'git', url:'https://github.com/HajinKimm'}
]
const Sns = () => {
    return (
        <ul className='sns'>
            {
                snsList.map(item=><li key={item.id}>
                    <Link to={item.url} target="_blank">{item.icon} </Link>
                </li>)
            }
        </ul>
    );
};

export default Sns;