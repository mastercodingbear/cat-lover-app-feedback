'use client'

import { Carousel } from 'react-responsive-carousel'

import { CatBreed, CatImage } from '@/model/app.model'
import CatImageCard from '../cats/CatImageCard'

type Props = {
  breed: CatBreed
  images: CatImage[]
}

const CatBreed = ({ breed, images }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-medium text-center text-slate-600">
        Cat Breed
      </h1>

      <div className="mt-6 rounded-md max-w-full">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={5000}
        >
          {images.map((cat: CatImage) => (
            <CatImageCard key={cat.id} cat={cat} />
          ))}
        </Carousel>
      </div>

      <div className="mt-6 flex flex-col space-y-1">
        <div className="flex font-medium text-lg">{breed.name} ({breed.country_codes})</div>
        <div className="text-base">
          <span>{breed.description}</span>
        </div>
      </div>
    </div>
  )
}

export default CatBreed
