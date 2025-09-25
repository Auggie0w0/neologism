export interface Word {
    id: string;
    term: string;
    definition: string;
    createdAt: Date;
}

export interface WordRequest {
    term: string;
    definition: string;
}