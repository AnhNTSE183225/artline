import dayjs from "dayjs";
import { Pipeline } from "./entity";
import { Node } from "@xyflow/react";

// api/v1/pipelines
export const getPipelines = async (): Promise<Pipeline[]> => {
    return [
        {
            id: 1,
            name: "Digital Illustration Workflow",
            thumbnail: null,
            dateCreated: dayjs('2025-01-05'),
            dateModified: dayjs('2025-02-10'),
        },
        {
            id: 2,
            name: "3D Modeling & Texturing Pipeline",
            thumbnail: null,
            dateCreated: dayjs('2024-12-20'),
            dateModified: dayjs('2025-01-28'),
        },
        {
            id: 3,
            name: "Motion Graphics Animation",
            thumbnail: null,
            dateCreated: dayjs('2025-01-15'),
            dateModified: dayjs('2025-03-03'),
        },
        {
            id: 4,
            name: "UI/UX Design Sprint",
            thumbnail: null,
            dateCreated: dayjs('2024-11-11'),
            dateModified: dayjs('2025-01-08'),
        },
        {
            id: 5,
            name: "Print Media Layout Design",
            thumbnail: null,
            dateCreated: dayjs('2025-02-01'),
            dateModified: dayjs('2025-02-25'),
        },
        {
            id: 6,
            name: "Augmented Reality Prototyping",
            thumbnail: null,
            dateCreated: dayjs('2025-03-10'),
            dateModified: dayjs('2025-04-05'),
        },
        {
            id: 7,
            name: "Game Character Rigging",
            thumbnail: null,
            dateCreated: dayjs('2025-01-20'),
            dateModified: dayjs('2025-03-15'),
        },
        {
            id: 8,
            name: "Interactive Web Animation",
            thumbnail: null,
            dateCreated: dayjs('2025-02-14'),
            dateModified: dayjs('2025-03-20'),
        },
        {
            id: 9,
            name: "Virtual Reality Experience Design",
            thumbnail: null,
            dateCreated: dayjs('2024-12-05'),
            dateModified: dayjs('2025-01-18'),
        },
        {
            id: 10,
            name: "Brand Identity & Strategy",
            thumbnail: null,
            dateCreated: dayjs('2025-03-01'),
            dateModified: dayjs('2025-03-25'),
        }
    ];
}

export const getPipelineCanvas = async (pipelineId: number): Promise<Node[]> => {
    if (pipelineId == -1) return [];
    return [
        {
            id: '1',
            position: { x: 10, y: 10 },
            data: { label: `Hello Pipeline ${pipelineId}` },
            type: 'pipeline',
        },
        {
            id: '2',
            position: { x: 20, y: 20 },
            data: { label: `Hello Pipeline ${pipelineId}` },
            type: 'pipeline',
        }
    ];
}