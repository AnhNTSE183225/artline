import { NodeProps } from '@xyflow/react'
import React from 'react'
import s from './personnelNode.module.css'
import { ConfigProvider, Table, Typography } from 'antd'
import { PersonnelNodeTheme } from './PersonnelNodeTheme';
const { Text } = Typography;

export type PersonnelNodeData = {
    teamId: number;
    teamName: string;
    personnels: { id: number, name: string, position: string, info: string }[];
}

export const PersonnelNode: React.FC<NodeProps> = (props) => {

    const data = props.data as PersonnelNodeData;

    const tableColumns = [
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            align: 'center' as const,
            width: 200,
        },
        {
            title: 'POSITION',
            dataIndex: 'position',
            key: 'position',
            align: 'center' as const,
            width: 200
        },
        {
            title: 'INFO',
            dataIndex: 'info',
            key: 'info',
            align: 'center' as const,
            width: 200
        },
    ]

    const tableData = data.personnels.map(p => ({ ...p, key: p.id }))

    return (
        <ConfigProvider theme={PersonnelNodeTheme}>
            <div className={s.node}>
                <Text className={s.title}>PERSONNEL</Text>
                <Table bordered={true} className={s.table} pagination={false} columns={tableColumns} dataSource={tableData} />
            </div>
        </ConfigProvider>
    )
}
