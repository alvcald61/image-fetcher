import React from 'react' ;
import { Photos } from '../types/ImageType'
import { Context } from '../types/Context';
export const defaultValue : Context  = {
    images: {} as Photos,
    setImages: () => {},
    tag: "",
    setTag: () => {},
    page: 1,
    setPage: () => {},
    setImageOfModal: () => {},
    imageOfModal: null,
}

const AppContext = React.createContext(defaultValue);

export default AppContext;

