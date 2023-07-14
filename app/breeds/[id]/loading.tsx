import LoadingIcon from '@/app/ui/loadingIcon'

const loading = () => {
  return (
    <>
      <h1 className="text-2xl font-medium text-center text-slate-600">
        Cat Breed
      </h1>
      <div className="flex justify-center py-10">
        <LoadingIcon />
      </div>
    </>
  )
}

export default loading
