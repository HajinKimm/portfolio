import styled from "styled-components";

export const VisualWrap = styled.div`
        position: relative;
        .circle{
            height: 500px; 
            width: 100%;
            height: 1050px;
            span{
                display: block; 
                width: 500px; 
                height: 500px;
                position: absolute; 
                border: 2px solid #000;
                &:nth-child(1){ 
                    left: 8%; 
                    top: 35%; 
                    width: 450px; 
                    height: 500px;
                    border-radius: 44% 56% 44% 56% / 53% 49% 51% 47%  ; border-color: pink;
                    animation: ani 10s linear infinite;
                }
                &:nth-child(2){ 
                    right: 10%; 
                    top: 25%; 
                    width: 550px; 
                    height: 550px;
                    border-radius: 44% 56% 60% 40% / 44% 39% 61% 56%  ; border-color: #e7f349;
                    animation: ani 15s linear infinite;
                }
                &:nth-child(3){ 
                    left: 42%; 
                    top: 35%; 
                    width: 550px; 
                    height: 550px;
                    border-radius: 63% 37% 49% 51% / 41% 48% 52% 59%   ; border-color: #a2f7ea;
                    animation: ani 20s linear infinite;
                }
                &:nth-child(4){ 
                    left: 25%; 
                    top: 15%;
                    border-radius:50% 50% 47% 53% / 40% 50% 50% 61%   ; border-color: #ad91ea;
                    animation: ani 25s linear infinite;
                }

            }
        }

        @keyframes ani {
            0%{transform: rotate(0deg);}
            100%{transform: rotate(360deg);}
        }

        .txt {
            width: 700px; 
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translateX(-50%);
            p{
                display: flex;
                
                span{
                    
                    display: block; font-size: 100px; letter-spacing: 15px;
                    font-weight: 900; line-height: 1; 
                    position: relative;opacity: 0;
                    &.w50{
                        width:50px;
                    }
                    &:nth-child(1){ animation: ani1 0.5s linear 1 forwards;}
                    &:nth-child(2){ animation: ani2 0.6s linear 1 forwards;}
                    &:nth-child(3){ animation: ani3 0.7s linear 1 forwards;}
                    &:nth-child(4){animation: ani4 0.8s linear 1 forwards;}
                    &:nth-child(5){animation: ani5 0.9s linear 1 forwards;}
                    &:nth-child(6){animation: ani6 1.0s linear 1 forwards;}
                    &:nth-child(7){animation: ani7 1.1s linear 1 forwards;}
                    &:nth-child(8){animation: ani7 1.2s linear 1 forwards;}
                    &:nth-child(9){animation: ani7 1.3s linear 1 forwards;}
                }
                &.back{
                    margin-top: 100px;
                    span{
                        animation-delay: 0.8s;
                    }
                }
            }
        }

        
        @keyframes ani1 {
            0%{transform: translateY(100px); opacity: 0;}            
            100%{transform: translateY(0); opacity: 1;}      
        }
        
        @keyframes ani2 {
            0%{transform: translateY(100px); opacity: 0;}       
            10%{transform:  translateY(100px);opacity: 0;}     
            100%{transform: translateY(0);opacity: 1;}      
        }
        @keyframes ani3 {
            0%{transform: translateY(100px); opacity: 0;}       
            18%{transform:  translateY(100px);opacity: 0;}     
            100%{transform: translateY(0);opacity: 1;}      
        }
        @keyframes ani4 {
            0%{transform: translateY(100px); opacity: 0;}       
            25%{transform:  translateY(100px);opacity: 0;}     
            100%{transform: translateY(0);opacity: 1;}      
        }
        @keyframes ani5 {
            0%{transform: translateY(100px); opacity: 0;}       
            27%{transform:  translateY(100px);opacity: 0;}     
            100%{transform: translateY(0);opacity: 1;}      
        }
        @keyframes ani6 {
            0%{transform: translateY(100px); opacity: 0;}       
            30%{transform:  translateY(100px);opacity: 0;}     
            100%{transform: translateY(0);opacity: 1;}      
        }
        @keyframes ani7 {
            0%{transform: translateY(100px); opacity: 0;}       
            32%{transform:  translateY(100px);opacity: 0;}     
            100%{transform: translateY(0);opacity: 1;}      
        }
        @keyframes ani8 {
            0%{transform: translateY(100px); opacity: 0;}       
            35%{transform:  translateY(100px);opacity: 0;}     
            100%{transform: translateY(0);opacity: 1;}      
        }
        @keyframes ani9 {
            0%{transform: translateY(100px); opacity: 0;}       
            37%{transform:  translateY(100px);opacity: 0;}     
            100%{transform: translateY(0);opacity: 1;}      
        }
`