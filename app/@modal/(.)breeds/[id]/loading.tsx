import LoadingIcon from '@/app/ui/loadingIcon'
import Modal from '@/app/ui/modal'

const BreedModalPage = async ({ params }: { params: { id: string } }) => {
  return (
    <Modal>
      <h1 className="text-2xl font-medium text-center text-slate-600">
        Cat Breed
      </h1>
      <div className="flex justify-center py-10">
        <LoadingIcon />
      </div>
    </Modal>
  )
}

export default BreedModalPage
