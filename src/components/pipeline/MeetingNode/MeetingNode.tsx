import { NodeProps } from '@xyflow/react'
import React from 'react'
import s from './MeetingNode.module.css'
import { ConfigProvider, Table, Typography } from 'antd'
import { MeetingNodeTheme } from './MeetingNodeTheme';
import dayjs, { Dayjs } from 'dayjs';
const { Text } = Typography;

export type MeetingNodeData = {
    meetings: {
        meetingId: number;
        date: Dayjs,
        agenda: string,
        status: string,
    }[]
}

export const MeetingNode: React.FC<NodeProps> = (props) => {

    const data = props.data as MeetingNodeData;

    const tableColumns = [
        {
            title: 'DATE',
            dataIndex: 'date',
            key: 'date',
            align: 'center' as const,
            width: 200,
        },
        {
            title: 'TIME',
            dataIndex: 'time',
            key: 'time',
            align: 'center' as const,
            width: 100
        },
        {
            title: 'AGENDA',
            dataIndex: 'agenda',
            key: 'agenda',
            align: 'center' as const,
            width: 200
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            align: 'center' as const,
            width: 100
        },
        {
            title: 'MEETING SPACE',
            dataIndex: 'meetingSpace',
            key: 'meetingSpace',
            align: 'center' as const,
            width: 200
        },
    ]

    const tableData = data.meetings.map(m => (
        {
            key: m.meetingId,
            date: dayjs(m.date).format('DD/MM/YYYY'),
            time: dayjs(m.date).format('HH:mm'),
            agenda: m.agenda,
            status: m.status,
            meetingSpace: ''
        }
    ))

    return (
        <ConfigProvider theme={MeetingNodeTheme}>
            <div className={s.node}>
                <Text className={s.title}>MEETING</Text>
                <Table bordered={true} className={s.table} pagination={false} columns={tableColumns} dataSource={tableData} />
            </div>
        </ConfigProvider>
    )
}
