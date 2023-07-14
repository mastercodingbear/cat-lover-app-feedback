'use client'

import { createContext, useState, useEffect, useRef } from 'react'

import { CatImage } from '@/model/app.model'

type Props = {
  children: React.ReactNode
}

type ContextType = {
  favourites: CatImage[]
  addToFavourites: (cat: CatImage) => void
  removeFromFavourites: (cat: CatImage) => void
}

export const FavouritesContext = createContext<ContextType>({
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
})

export const FavouritesProvider = ({ children }: Props) => {
  const initialRender = useRef(true)
  const [favourites, setFavourites] = useState<CatImage[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFavourites = window.localStorage.getItem('favourites')
      setFavourites(savedFavourites ? JSON.parse(savedFavourites) : [])
    }
  }, [])

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('favourites', JSON.stringify(favourites))
    }
  }, [favourites])

  const addToFavourites = (cat: CatImage) => {
    setFavourites((prev: CatImage[]) => [...prev, cat])
  }

  const removeFromFavourites = (cat: CatImage) => {
    setFavourites((prev) => prev.filter((c) => c.id !== cat.id))
  }

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}
