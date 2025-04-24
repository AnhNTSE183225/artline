import React, { useEffect, useState } from 'react'
import { Pipeline } from '../data/entity';
import { Col, Row, Space, Typography } from 'antd';
import { getPipelines } from '../data/fakeData';
import s from './pagePipeline.module.css';
import placeHolderThumbail from '../assets/placeholder169.jpg';
const { Text } = Typography;

export const PagePipeline: React.FC = () => {

    const [pipelines, setPipelines] = useState<Pipeline[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPipelines();
            setPipelines(data);
        };
        fetchData();
    }, []);

    return (
        <Space direction='vertical' className={s.space}>
            <Typography.Title level={4}>Pipeline Space</Typography.Title>
            <Row gutter={[10, 10]} className={s.row}>
                {pipelines.map((pipeline) => (
                    <Col key={pipeline.id} md={8}>
                        <Space direction='vertical' className={s.card}>
                            <img className={s.image} src={placeHolderThumbail} alt="placeholder" />
                            <Text style={{fontWeight: 600}}>{pipeline.name}</Text>
                            <Text style={{fontWeight: 300}}>
                                {pipeline.dateModified.format('hh:mm A')} | {pipeline.dateModified.format('ddd MM/DD')}
                            </Text>
                        </Space>
                    </Col>
                ))}
            </Row>
        </Space>
    );
}
