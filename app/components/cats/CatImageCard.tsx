'use client'

import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FavouritesContext } from '@/context/favourites.context'
import { CatImage } from '@/model/app.model'

import UnlikeIcon from '../UnlikeIcon'
import LikeIcon from '../LikeIcon'

type Props = {
  cat: CatImage
}

const CatImageCard = ({ cat }: Props) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext)

  const isFavourite = favourites.some((c) => c.id === cat.id)

  return (
    <Link
      className="relative flex items-center rounded-lg shadow overflow-hidden h-80 cursor-pointer bg-blue-100"
      href={`/cats/${cat.id}`}
    >
      <Image
        className="object-cover"
        src={cat.url}
        alt={'Cat-' + cat.id}
        width={cat.width}
        height={cat.height}
      />
      {/* Like Icon */}
      <div
        className="absolute top-2 right-2 cursor-pointer w-8 h-8"
        onClick={(e) => {
          e.preventDefault()
          if (isFavourite) {
            removeFromFavourites(cat)
          } else {
            addToFavourites(cat)
          }
        }}
      >
        {isFavourite ? (
          <UnlikeIcon />
        ) : (
          <LikeIcon />
        )}
      </div>
    </Link>
  )
}

export default CatImageCard
