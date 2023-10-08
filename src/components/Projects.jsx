import React, { useState } from 'react';
import WepSite from './WepSite';
import projectData from '../assets/api/project.json'

const Projects = () => {
    const [web, setWeb] = useState(projectData.filter(item=>item.category === 'web'))
    const [js, setJs] = useState(projectData.filter(item=>item.category === 'js'))
    const [rweb, setRweb] = useState(projectData.filter(item=>item.category === 'Rweb'))
    return (
        <div>
            <WepSite web={web}/>
            <WepSite rweb={rweb}/>
            <WepSite js={js}/>
        </div>
    );
};

export default Projects;