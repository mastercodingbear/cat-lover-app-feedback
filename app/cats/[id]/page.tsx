import { getCatImageById } from '@/api/cat'
import CatImage from '@/app/components/cats/CatImage'

const CatPage = async ({ params }: { params: { id: string } }) => {
  const cat = await getCatImageById(params.id)

  return (
    <div className="w-full">
      <CatImage cat={cat} />
    </div>
  )
}

export default CatPage
