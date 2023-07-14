'use client'

import { useEffect, useState } from 'react'

import { getCatImages } from '@/api/cat'
import { CatImage } from '@/model/app.model'

import CatCard from '../components/cats/CatImageCard'
import Button from '../ui/button'
import LoadingIcon from '../ui/loadingIcon'

const CatImagesPage = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    initCats()
  }, [])

  const initCats = async () => {
    setLoading(true)
    const catImages = await getCatImages()
    setLoading(false)
    setCatImages(catImages)
  }

  const loadMoreCats = async () => {
    setLoading(true)
    const newImages = await getCatImages()
    setLoading(false)
    setCatImages([...catImages, ...newImages])
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {catImages?.map((cat: CatImage) => <CatCard key={cat.id} cat={cat} />)}
      </div>

      {loading ? (
        <div className="flex justify-center my-6">
          <LoadingIcon />
        </div>
      ) : (
        <div className="flex justify-center mt-6">
          <Button className="" onClick={loadMoreCats}>
            Load more
          </Button>
        </div>
      )}
    </>
  )
}

export default CatImagesPage
