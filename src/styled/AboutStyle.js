import styled from "styled-components";
import { inner, h2, mainColor } from './commonStyle';

export const AboutWrap = styled.div`
    background: #fff;
    color:#000;
    padding: 50px 0px;
    .inner{
        ${inner}
        h2{
            ${h2}
        }
    }
    .about_wrap{
        display: flex;
        .pic{
            width: 400px;
            margin-right: 150px;
            img{
                width: 400px;
            }
        }
        .desc{
            width: 850px;
            h3{
                border-bottom: 1px solid #ccc;
                padding-bottom: 20px;
                margin-bottom: 20px;
                font-size: 20px;
                line-height: 1;
                span{
                    font-size: 40px;
                    font-weight: 500;
                    padding-right: 20px;
                }
            }
            ul{
                li{
                    font-size: 20px;
                    b{
                        width: 150px;
                        display: inline-block;
                        padding: 5px;
                        box-sizing: border-box; 
                    }
                    strong{
                        width: 350px;
                        display: inline-block;
                        padding: 5px 30px;
                        box-sizing: border-box;
                    }
                    &.about_bottom{
                        padding: 50px 10px ;
                        p{
                            font-size: 20px;
                            line-height: 2;
                            em{
                                font-weight: 700;
                            }
                        }

                    }
                }
            }
        }
    }


    .skills_wrap {
        margin: 50px;
        
        .skills_box {
            background: #f6f6f6;
            display: flex;
            justify-content: space-around;
            
            article {
                width: 40%;
            }
            .skill_box {
                width: 100%;
                margin: 30px 0;
                .title {
                    display: block;
                    font-size: 16px;
                    font-weight: 600;
                    color: #333;
                    margin: 30px 10px 10px;
                }
                .skill_bar {
                    height: 10px;
                    width: 100%;
                    border-radius: 6px;
                    margin-top: 6px;
                    background: rgba(0, 0, 0, 0.1);
                }
                .skill_per {
                    position: relative;
                    display: block;
                    height: 100%;
                    border-radius: 6px;
                    background: crimson;
                    animation: progress 0.7s ease-in-out forwards;
                    opacity: 0;
                }
                .tooltip {
                    position: absolute;
                    right: -14px;
                    top: -37px;
                    font-size: 12px;
                    font-weight: 500;
                    color: #fff;
                    padding: 4px 6px;
                    border-radius: 3px;
                    background: crimson;
                    z-index: 1;
                    &::before {
                        content: '';
                        position: absolute;
                        left: 50%;
                        bottom: -2px;
                        height: 10px;
                        width: 10px;
                        z-index: -1;
                        background-color: crimson;
                        transform: translateX(-50%) rotate(45deg);
                    }
                }
            }
        }
        .iconlist {
            display: flex;
            flex-wrap: wrap;
            padding-top: 60px;
            li {
                margin-right: 30px;
                margin-bottom: 50px;
                &:nth-child(5n) {
                    margin-right: 0px;
                }
                img {
                    width: 80px;
                }
            }
        }
    }


    @keyframes progress {
    0% {
        width: 0;
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
}


`