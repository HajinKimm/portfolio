import React from 'react';
import About from '../components/About';
import Visual from '../components/Visual';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div style={{width:'100%'}}>
            <Visual/>
            <About/>
            <Projects/>
        </div>
    );
};

export default Home;