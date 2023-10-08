import React from 'react';
import { HeaderWrap } from '../styled/HeaderStyle';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Sns from './Sns';

const Header = () => {
    return (
        <HeaderWrap>
            <div className="inner">
                <h1 onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>Creative<br/>Kim Hajin</h1>
                <Menu/>
                <Sns/>
            </div>
        </HeaderWrap>
    );
};

export default Header;