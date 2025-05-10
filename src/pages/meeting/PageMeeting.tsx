import React, { useEffect, useState } from 'react'
import s from './pageMeeting.module.css'
import { MeetingSpace } from '../../data/entity';
import { getMeetingSpaces } from '../../data/fakeData';
import { Button, Col, Row, Space, Typography } from 'antd';
const { Title, Text } = Typography;
import placeHolderThumbail from '../../assets/images/placeholder169.jpg';

export const PageMeeting: React.FC = () => {

    const [meetingSpaces, setMeetingSpaces] = useState<MeetingSpace[]>([]);

    const fetchData = async () => {
        const result = await getMeetingSpaces();
        setMeetingSpaces(result);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Row className={s.layout}>
            <Col xs={24} md={8}>
                <Space direction='vertical'>
                    <Title level={5}>SCHEDULE MEETING</Title>
                    <Space>
                        <Text>Choose Meeting Space</Text>
                        <Text>Meeting 1</Text>
                    </Space>
                    <Space>
                        <Text>Name</Text>
                        <Text>Add name</Text>
                    </Space>
                    <Space>
                        <Text>Time & Date</Text>
                        <Text>dd/mm/yy</Text>
                    </Space>
                    <Space>
                        <Text>Participants</Text>
                        <Text>Add Participants</Text>
                    </Space>
                    <Space>
                        <Text>Description</Text>
                        <Text>Add description</Text>
                    </Space>
                    <Space>
                        <Button>Public Call</Button>
                        <Button>View Info</Button>
                    </Space>
                </Space>
            </Col>
            <Col xs={24} md={16}>
                <Space direction='vertical'>
                    <Title level={4}>Meeting Space</Title>
                    <Row>
                        {
                            meetingSpaces.map((m, _) => (
                                <Col md={12}>
                                    <Space direction='vertical' className={s.meetingSpaceCard}>
                                        <img className={s.thumbnail} src={m.thumbnail || placeHolderThumbail} alt={m.title} />
                                        <Text>{m.title}</Text>
                                        <Text>
                                            {m.dateModified.format('hh:mm A')} | {m.dateModified.format('ddd MM/DD')}
                                        </Text>
                                    </Space>
                                </Col>
                            ))
                        }
                    </Row>
                </Space>
            </Col>
        </Row>
    )
}
