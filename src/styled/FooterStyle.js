import styled from "styled-components";

export const FooterWrap = styled.footer`
    .inner{
        width: 100%;
        height: 200px;
        background: #000;
        position: relative;
    }
    .text{
        text-align: center;
        color: #fff;
        padding-top: 80px;
    }
    .goTop {
        z-index: 10;
        cursor: pointer;
        position: absolute;
        right: 50px;
        top: 35px;
        strong{
            color: #fff;
            font-weight: 700;
            position: relative;
            &::after{
                content: "";
                display: block;
                position: absolute;
                top: -35px;
                left: 50%;
                transform: translateX(-50%);
                background: #fff;
                width: 2px;
                height: 30px;
            }
        }
    }
`