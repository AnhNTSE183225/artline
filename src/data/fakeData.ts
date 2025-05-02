import dayjs from "dayjs";
import { Pipeline } from "./entity";
import { Node } from "@xyflow/react";
import { PersonnelNodeData } from "../components/pipeline/PersonnelNode/PersonnelNode";
import { MeetingNodeData } from "../components/pipeline/MeetingNode/MeetingNode";

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
            data: {
                teamId: pipelineId,
                teamName: `Team ${pipelineId}`,
                personnels: [
                    { id: 1, name: 'Name', position: 'Character Design', info: 'Frontend' },
                    { id: 2, name: 'Hucha Nguyen', position: 'Character Art', info: 'Backend' },
                    { id: 3, name: 'Nhat Vy', position: 'Character Art', info: 'Backend' },
                    { id: 4, name: 'Minh Uyen', position: 'Character Art', info: 'Backend' },
                    { id: 5, name: 'Nguyen Di', position: 'Character Art', info: "Lorem Ipsum is simply dummy text of the" },
                ]
            } as PersonnelNodeData,
            type: 'personnel',
        },
        {
            id: '2',
            position: { x: 30, y: 30 },
            data: {
                meetings: [
                    {
                        meetingId: 1,
                        date: dayjs('2025-03-01T10:00'),
                        agenda: 'Discuss overall progress',
                        status: 'Done',
                    },
                    {
                        meetingId: 2,
                        date: dayjs('2025-03-17T14:00'),
                        agenda: 'Background team review',
                        status: 'Not yet',
                    },
                    {
                        meetingId: 3,
                        date: dayjs('2025-03-24T15:30'),
                        agenda: 'Character team updates',
                        status: 'Not yet',
                    },
                    {
                        meetingId: 4,
                        date: dayjs('2025-03-24T15:45'), // Same date as previous row
                        agenda: 'Art pipeline discussion',
                        status: 'Not yet',
                    },
                    {
                        meetingId: 5,
                        date: dayjs('2025-04-07T16:00'),
                        agenda: 'Next steps and deadlines',
                        status: 'Not yet',
                    },
                ],
            } as MeetingNodeData,
            type: 'meeting'
        },
        {
            id: '3',
            position: { x: 20, y: 20 },
            data: { label: `Hello Pipeline ${pipelineId}` },
            type: 'pipeline',
        }
    ];
}