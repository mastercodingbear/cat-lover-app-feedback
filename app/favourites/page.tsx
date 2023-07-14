'use client'

import { useContext, useEffect, useState } from 'react'

import { getCatImages } from '@/api/cat'
import { FavouritesContext } from '@/context/favourites.context'
import { CatImage } from '@/model/app.model'

import CatCard from '../components/cats/CatImageCard'
import Button from '../ui/button'
import LoadingIcon from '../ui/loadingIcon'
import Link from 'next/link'

const FavouritesPage = () => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext)

  return (
    <>
      {favourites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {favourites?.map((cat: CatImage) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-2xl font-medium text-center text-slate-600">
            No Favourites
          </div>
          <div className="mt-6">
            <Link href="/cats" className="">
              <Button>Go to Home</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default FavouritesPage
