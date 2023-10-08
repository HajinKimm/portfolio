import React from 'react';
import { VisualWrap } from '../styled/VisualStyle';

const Visual = () => {
    return (
        <VisualWrap>
            <div className="circle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="txt">
                <p>
                    <span>H</span>
                    <span>A</span>
                    <span>J</span>
                    <span className='w50'>I</span>
                    <span>N</span>
                    <span className='w50'>'</span>
                    <span>s</span>

                </p>
                <p className='back'>
                    <span>P</span>
                    <span>O</span>
                    <span>R</span>
                    <span>T</span>
                    <span>F</span>
                    <span>O</span>
                    <span>L</span>
                    <span className='w50'>I</span>
                    <span>O</span>

                </p>
            </div>
        </VisualWrap>
    );
};

export default Visual;