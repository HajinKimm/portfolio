// import projectData from '../assets/api/project.json'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { WepSiteWrap } from '../styled/ProjectStyle';

const WepSite = (project) => {
    const [list, setList] = useState(project.web?project.web:project.js?project.js:project.rweb)
    const [headline, setHeadline] = useState(project.web?`WebSite`:project.js?`JavaScript`:`Responsiv Wep`)
    console.log(headline)

    return (
        <WepSiteWrap className={`${headline==='Responsiv Wep'?'bgWithe':''}`}>
            <div className="inner">
                <h2>{headline}</h2>
                <Swiper
                pagination={{
                    type: 'progressbar',
                    // type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="wepSwiper"
                >
                    {
                        list.map(item=>
                        <SwiperSlide key={item.id} className='swiperList'>
                            <div className='imgbox'>
                                <img src="./images/project/monitor.png" alt="monitor" className='imgBorder'/>
                                <img src={`./images/project/${item.img}`} alt={item.koreaTitle} className='mainImg'/>
                            </div>
                            <div className="text">
                                <h4>{item.koreaTitle}&nbsp;&nbsp;<span>({item.work})</span></h4>
                                <button className='btn btnSite'><Link to={item.siteUrl} target='_black'><span>사이트 바로가기</span></Link></button>
                                <button className='btn btnGit'><Link to={item.githubUrl} target='_black'><span>작업내용-github</span></Link></button>
                                <strong>1. TITLE&nbsp;&nbsp;:&nbsp;&nbsp;<b>{item.desc_title}</b> </strong>
                                <strong>2. 프로젝트 기능 구현</strong>
                                <ul>
                                    {item.desc_list.split('\n').map((x,id)=><li key={id}>-&nbsp;&nbsp;<b>{x}</b></li>)}
                                </ul>
                                <strong>3. 프로젝트 기술 스택</strong>
                                <ul>
                                    {item.version.split('\n').map((x,id)=><li key={id}>{x}</li>)}
                                </ul>
                            </div>
                            
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </WepSiteWrap>
    );
};

export default WepSite;