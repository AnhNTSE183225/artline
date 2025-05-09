import React, { useEffect, useState } from 'react'
import { Project } from '../../data/entity'
import { getProjects } from '../../data/fakeData';
import { Card, Col, Row, Space, Typography } from 'antd';
const { Text } = Typography;
import s from './pageProject.module.css';

export const PageProject: React.FC = () => {

    const [projects, setProjects] = useState<Project[]>([]);

    const fetchData = async () => {
        const result = await getProjects();
        setProjects(result);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Space className={s.layout} direction='vertical'>
            <Typography.Title level={4}>Project</Typography.Title>
            <Row gutter={[10, 10]}>
                {
                    projects.map((p, _) => (
                        <Col key={_} md={8}>
                            <Space direction='vertical' className={s.projectCard}>
                                <img className={s.projectImage} src={p.imageUrl} alt={p.imageUrl} />
                                <Text>{p.title}</Text>
                            </Space>
                        </Col>
                    ))
                }
            </Row>
        </Space>
    )
}
