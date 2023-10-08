import styled from "styled-components";
import { inner, mainColor } from "./commonStyle";

export const HeaderWrap = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    .inner{
        ${inner}
        height: 100px;
        h1{
            
            color: ${mainColor};
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            font-weight: 900;
            border: 2px solid ${mainColor};
            text-align: center;
            padding: 5px 15px;
            border-radius: 25px;
            font-size: 12px;
            cursor: pointer;
        }
    }
    
    nav{
        position: absolute;
        top: 50%;
        transform: translateY(-60%);
        left: 400px;
        
        ul{
            display: flex;
            li{
                margin-right: 120px;
                a{
                    font-size: 22px;
                    font-weight: 700;
                    color:#fff;
                    position: relative;
                    &::after{
                        content: "";
                        position: absolute;
                        background: #fff;
                        bottom: -15px;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        transform: scale(0);
                        transition: all ease 0.3s;
                    }
                    &:hover{
                        &::after{
                            transform: scale(1);
                        }
                    }
                }
            }
        }
    }
    .sns{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0px;
        li{
            a{
                font-size: 30px;
                color: #fff;
                &:hover{
                }
            }
        }
    }
`