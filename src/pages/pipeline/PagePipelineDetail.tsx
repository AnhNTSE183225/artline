import React, { useCallback, useEffect } from 'react'
import { useParams } from 'react-router'
import s from './pagePipelineDetail.module.css';
import '@xyflow/react/dist/style.css';
import { addEdge, Background, BackgroundVariant, Controls, Edge, Node, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
import { PipelineNode } from '../../components/pipeline/PipelineNode';
import { getPipelineCanvas } from '../../data/fakeData';
import { PersonnelNode } from '../../components/pipeline/PersonnelNode/PersonnelNode';
import { MeetingNode } from '../../components/pipeline/MeetingNode/MeetingNode';

const nodeTypes = {
    pipeline: PipelineNode,
    personnel: PersonnelNode,
    meeting: MeetingNode
}

export const PagePipelineDetail: React.FC = () => {

    const { id } = useParams();

    useEffect(() => {
        fetchNodes();
    }, []);

    const fetchNodes = async () => {
        if(id) {
            const canvas = await getPipelineCanvas(parseInt(id));
            setNodes(canvas);
        }
    }

    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    )

    return (
        <div className={s.canvas}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}>
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} color='black' />
                <Controls className={s.controls} />
            </ReactFlow>
        </div>
    )
}
