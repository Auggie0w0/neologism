export interface Word {
    id: string;
    term: string;
    definition: string;
    createdAt: Date;
}

export interface WordResponse {
    success: boolean;
    data: Word | Word[];
}

export interface WordRequest {
    term: string;
    definition: string;
}