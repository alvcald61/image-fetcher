import { Photos, Photo } from "./ImageType";

export interface Context {
    images: Photos;
    setImages: (images: Photos) => void;
    tag: string | undefined, 
    setTag: (tag: string | undefined) => void;
    page: number;
    setPage : (page: number) => void;
    imageOfModal: Photo | null;
    setImageOfModal: (url: Photo | null)=>void;
}

export interface Action {
    type: string;
    payload: Photos;
}