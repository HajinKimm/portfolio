import React from 'react';
import { Link } from 'react-router-dom';
import { FooterWrap } from '../styled/FooterStyle';

const Footer = () => {
    const handleGoTopClick = () => {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <FooterWrap>
            <div className='inner'>
                <div  className='text'>
                    <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.</p>
                    <p>© 2023 Kim, Ha-jin. All Rights Reserved.</p>
                </div>
                <div className='goTop'><Link href='#' onClick={handleGoTopClick} ><strong>TOP</strong></Link></div>

            </div>
        </FooterWrap>
    );
};

export default Footer;