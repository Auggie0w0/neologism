export interface Word {
    id: number;
    term: string;
    definition: string;
    createdAt: Date;
}

export interface WordRequest {
    term: string;
    definition: string;
}