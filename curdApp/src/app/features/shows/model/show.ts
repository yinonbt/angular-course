import {Image} from './image';
export interface Show {
    id: number;
        url: string;
        name: string;
        language: string;
        status: string;
        runtime: number;
        premiered: string;
        officialSite?: any;
        weight: number;
        webChannel?: any;
        image: Image;
        summary: string;
}
