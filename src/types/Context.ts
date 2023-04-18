import { Photos } from "./ImageType";

export interface Context {
    images: Photos;
    setImages: (images: Photos) => void;
    tag: string | undefined, 
    setTag: (tag: string | undefined) => void;
    page: number;
    setPage : (page: number) => void;
}

export interface Action {
    type: string;
    payload: Photos;
}