import { Menu } from 'antd';
import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import s from './sidebar.module.css';
import pipelineIcon from '../assets/icons/Pipeline.svg';
import meetingIcon from '../assets/icons/Meeting.svg';
import projectIcon from '../assets/icons/Project.svg';
import scriptIcon from '../assets/icons/Script.svg';
import storyboardIcon from '../assets/icons/Storyboard.svg';

export const Sidebar: React.FC = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const items = [
        { label: 'Pipeline', key: '/', icon: <img src={pipelineIcon} alt="pipeline" className={s.icon} /> },
        { label: 'Project', key: '/projects', icon: <img src={projectIcon} alt="project" className={s.icon} /> },
        { label: 'Meeting', key: '/meetings', icon: <img src={meetingIcon} alt="meeting" className={s.icon} /> },
        { label: 'Script', key: '/scripts', icon: <img src={scriptIcon} alt="script" className={s.icon} /> },
        { label: 'Storyboard', key: '/storyboards', icon: <img src={storyboardIcon} alt="storyboard" className={s.icon} /> }
    ]

    return (
        <Menu
            theme='light'
            mode='inline'
            selectedKeys={[location.pathname]}
            onClick={(e) => navigate(e.key)}
            items={items}
            className={s.menu}
        />
    )
}
