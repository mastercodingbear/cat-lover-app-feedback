import { getCatBreedById, getCatImages } from '@/api/cat'

import CatBreed from '@/app/components/breeds/CatBreed'
import Modal from '@/app/ui/modal'

const CatModalPage = async ({ params }: { params: { id: string } }) => {
  const breed = await getCatBreedById(params.id)
  const images = await getCatImages(params.id)

  return (
    breed && (
      <Modal>
        <CatBreed breed={breed} images={images} />
      </Modal>
    )
  )
}

export default CatModalPage
