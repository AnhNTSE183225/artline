import React from 'react'
import { useParams } from 'react-router'
import s from './pagePipelineDetail.module.css';
import '@xyflow/react/dist/style.css';
import { Background, BackgroundVariant, Controls, ReactFlow } from '@xyflow/react';

export const PagePipelineDetail: React.FC = () => {

    const { id } = useParams();

    const initalNodes = [
        {
            id: '1',
            position: { x: 10, y: 10 },
            data: { label: 'Hello World' },
            type: 'default',
        }
    ]
    const initialEdges: any[] = [];

    return (
        <div className={s.canvas}>
            <ReactFlow
                nodes={initalNodes}
                edges={initialEdges}>
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} color='black'/>
                <Controls className={s.controls}/>
            </ReactFlow>
        </div>
    )
}
