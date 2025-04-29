import { Handle, NodeProps, Position } from '@xyflow/react'
import React from 'react'
import s from './pipelineNode.module.css'
import { Typography } from 'antd'
const { Text } = Typography;

export const PipelineNode: React.FC<NodeProps> = ({ data }) => {

    const label = (data as any).label;

    return (
        <div className={s.node}>
            <Text>{label}</Text>
            <div style={{position: 'relative', width: '100%'}}>
                Person 1
                <Handle type='source' position={Position.Left}/>
                <Handle type='target' id='target-1' position={Position.Right}/>
            </div>
            <div style={{position: 'relative', width: '100%'}}>
                Person 2
                <Handle type='source' id='source-2' position={Position.Left}/>
                <Handle type='target' id='target-2' position={Position.Right}/>
            </div>
        </div>
    )
}
