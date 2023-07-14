import { getCatBreedById, getCatImages } from '@/api/cat'
import CatBreed from '@/app/components/breeds/CatBreed'

const BreedPage = async ({ params }: { params: { id: string } }) => {
  const breed = await getCatBreedById(params.id)
  const images = await getCatImages(params.id)

  return (
    <div className="w-full">
      <CatBreed breed={breed} images={images} />
    </div>
  )
}

export default BreedPage
