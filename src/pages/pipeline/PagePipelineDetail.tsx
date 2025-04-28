import React from 'react'
import { useParams } from 'react-router'

export const PagePipelineDetail: React.FC = () => {

    const { id } = useParams();

    return (
        <div>Pipeline {id}</div>
    )
}
