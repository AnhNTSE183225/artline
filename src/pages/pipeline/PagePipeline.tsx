import React, { useEffect, useState } from 'react'
import { Pipeline } from '../../data/entity';
import { Col, Row, Space, Typography } from 'antd';
import { getPipelines } from '../../data/fakeData';
import s from './pagePipeline.module.css';
import placeHolderThumbail from '../../assets/images/placeholder169.jpg';
import { useNavigate } from 'react-router';
const { Text } = Typography;

export const PagePipeline: React.FC = () => {

    const [pipelines, setPipelines] = useState<Pipeline[]>([]);
    const navigate = useNavigate();

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
            <Row gutter={[10, 10]}>
                {pipelines.map((pipeline) => (
                    <Col key={pipeline.id} xs={24} sm={12} md={8}>
                        <Space onClick={() => navigate(`/pipelines/${pipeline.id}`)} direction='vertical' className={s.card}>
                            <img className={s.image} src={placeHolderThumbail} alt="placeholder" />
                            <Text style={{ fontWeight: 600 }}>{pipeline.name}</Text>
                            <Text style={{ fontWeight: 300 }}>
                                {pipeline.dateModified.format('hh:mm A')} | {pipeline.dateModified.format('ddd MM/DD')}
                            </Text>
                        </Space>
                    </Col>
                ))}
            </Row>
        </Space>
    );
}
