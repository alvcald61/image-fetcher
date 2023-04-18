import React, { useState } from 'react'
import { Photos } from '../types/ImageType'
import { Context } from '../types/Context'

import AppContext from './AppContext'

type Props = {
  children: React.ReactNode
}

const AppProvider = ({ children }: Props) => {
  const [images, setImages] = useState<Photos>({} as Photos)
  const [tag, setTag] = useState<string| undefined>('')
  const [page, setPage] = useState<number>(1)
  const value: Context = {
    images,
    setImages,
    tag,
    setTag,
    page, 
    setPage
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
