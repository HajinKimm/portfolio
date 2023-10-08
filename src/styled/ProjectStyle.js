import styled from "styled-components";
import { h2, inner, mainColor } from "./commonStyle";
import About from './../components/About';

export const WepSiteWrap = styled.section`
background: #333;
    .inner{
        /* ${inner} */
        /* padding: 100px 250px; */
        h2{
            padding: 100px 250px 0px;
            ${h2}
        }
    }
        .wepSwiper{

            .swiper-pagination-progressbar-fill{
                background: ${mainColor};
            }
             .swiper-button-prev:after, .swiper-button-next:after{
                color: ${mainColor};
            }
            .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after{
                transform: translateX(-100px) scale(1.5);
            }
            .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after{
                transform: translateX(100px) scale(1.5);

            }
            .swiper-horizontal > .swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-horizontal, .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{
                width: 1400px;
                margin-left: 250px;
            }
            .swiperList{
                display: flex;
                .imgbox{
                    box-sizing: border-box;
                    margin-left: 250px;
                    padding: 30px 30px;
                    background: #333;
                    margin-top: 50px;
                    width: 710px;
                    position: relative;
                    margin-bottom: 100px;
                    .imgBorder{
                        width: 640px;
                        height: 600px;
                    }
                    .mainImg{
                        position: absolute;
                        width: 600px;
                        top: 52px;
                        left: 50px;
                    }
                }
                .text{
                    width: 690px;
                    box-sizing: border-box;
                    margin-top: 50px;
                    padding: 50px 0px 0px 50px ;
                    background: #fff;
                    color: #000;
                    margin-bottom: 100px;
                    h4{
                        font-size: 40px;
                        font-weight: 700;
                        padding-bottom: 20px;
                        span{
                            font-size: 20px;
                            font-weight: 400;
                        }
                    }
                    strong{
                        display: block;
                        font-size: 20px;
                        margin-top: 20px;
                        b{
                            font-weight: 700;
                        }

                    }
                    ul{
                        li{
                            font-size: 18px;
                            text-indent:20px;
                            b{
                                font-weight: 500;
                            }
                        }
                    }
                    .btn {
                        /* width: 110px; */
                        border: none;
                        display: inline-block;
                        text-align: center;
                        cursor: pointer;
                        text-transform: uppercase;
                        outline: none;
                        overflow: hidden;
                        position: relative;
                        color: #fff;
                        font-weight: 700;
                        font-size: 15px;
                        background-color: #222;
                        margin: 0 30px 10px 0px;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.20);
                        box-sizing: border-box;
                        a{
                            box-sizing: border-box;
                            color: #fff;
                            font-weight: 700;
                            transition: 1s;
                            width: 209px;
                            height: 53px;
                        }
                        &:hover a{
                            color: #000;
                        }
                        span {
                            padding: 17px 50px;
                            display: inline-block;
                            position: relative; 
                            z-index: 1;
                        }
                        &:after {
                            content: "";
                            position: absolute;
                            left: 0;
                            top: 0;
                            height: 490%;
                            width: 140%;
                            background: ${mainColor};
                            -webkit-transition: all .5s ease-in-out;
                            transition: all .5s ease-in-out;
                            -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
                            transform: translateX(-98%) translateY(-25%) rotate(45deg);
                        }
                        &:hover:after {
                            -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
                            transform: translateX(-9%) translateY(-25%) rotate(45deg);
                        }

                    }
                }

            }
        
        
    }
    &.bgWithe{
        background: #fff;
        color: #000;
        .wepSwiper{

            .swiper-pagination-progressbar-fill{
                background: #333;
            }
                .swiper-button-prev:after, .swiper-button-next:after{
                color: #333;
            }
            .imgbox{
                background: #fff;
            }
            .text{
                background: #f6f6f6;
            }
        }
    }
`