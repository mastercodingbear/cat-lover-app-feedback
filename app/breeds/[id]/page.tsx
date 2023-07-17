import { getCatBreedById, getCatImages } from '@/api/cat'
import CatBreed from '@/app/components/breeds/CatBreed'

const BreedPage = async ({ params }: { params: { id: string } }) => {
  const [breed, images] = await Promise.all([getCatBreedById(params.id), getCatImages(params.id)])

  return (
    <div className="w-full">
      <CatBreed breed={breed} images={images} />
    </div>
  )
}

export default BreedPage
