import React from 'react';
import { skillsImgList, skillsList } from '../assets/api/skills';
import { AboutWrap } from '../styled/AboutStyle';
import '../assets/css/skills.css'

const About = () => {
    return (
        <AboutWrap>
        <section className='con about'>
            <div className="inner">
                <h2>About Me</h2>
                <div>
                    <div className='about_wrap'>
                        <article className='pic'>
                            <img src="./images/about/hajin_about_img.png" alt="김하진" />
                        </article>
                        <article className='desc'>
                            <h3><span>김하진</span>Kim Hajin</h3>
                            <ul>
                                <li><b>생년원일</b>:<strong>1995.12.11</strong></li>
                                <li><b>연락처</b>:<strong>010-7762-1995</strong></li>
                                <li><b>이메일</b>:<strong>11rlagkwls@naver.com</strong></li>
                                <li><b>주소</b>:<strong>인천광역시 계양구 동양동</strong></li>
                                <li className='about_bottom'><p><em>Frontend</em>를 목표로 하는 주니어 개발자입니다.<br/>
                                    Frontend 개발자가 되기 위해 <em>html5, css3, javascript, reactJS, sass</em> 등을 공부하고 <br/>
                                    더불어 <em>node.js, sql</em> 등의 Backend도 같이 공부하는 등 개발에 대한 관심사를 넓혀나가고 있습니다.<br/>
                                    회사와 함께 발전하며 시너지효과를 낼 수 있는 Frontend 개발자로 일하고 싶습니다.</p></li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <section className='con skills_wrap'>
            <div className="inner">
                <div className='skills_box'>
                    <article>
                        <div className='skill_box'>
                            {
                                skillsList.map(item => <div key={item.id}>
                                    <span className='title'>{item.text}</span>
                                    <div className='skill_bar'>
                                        <span className={`skill_per ${item.css}`}>
                                            <span className='tooltip'>{item.per}</span>
                                        </span>
                                    </div>
                                </div>)
                            }
                        </div>
                    </article>
                    <article>
                        <ul className='iconlist'>
                            {skillsImgList.map(item=><li key={item.id}>
                                <img src={item.imgurl} alt={item.text} />
                            </li>)}
                        </ul>
                    </article>
                </div>
            </div>
        </section>
        </AboutWrap>
    );
};

export default About;