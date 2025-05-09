import { Dayjs } from "dayjs";

export interface Pipeline {
    id: number,
    name: string,
    thumbnail?: string | null,
    dateCreated: Dayjs,
    dateModified: Dayjs
}

export interface Project {
    title: string,
    imageUrl: string
}