import { getCatImageById } from '@/api/cat'

import CatImage from '@/app/components/cats/CatImage'
import Modal from '@/app/ui/modal'

const CatModalPage = async ({ params }: { params: { id: string } }) => {
  const cat = await getCatImageById(params.id)

  return (
    cat && (
      <Modal>
        <CatImage cat={cat} />
      </Modal>
    )
  )
}

export default CatModalPage
