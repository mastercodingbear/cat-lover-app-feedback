import Image from 'next/image'

import { CatImage } from '@/model/app.model'

type Props = {
  cat: CatImage
}

const CatImage = ({ cat }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-medium text-center text-slate-600">
        Cat Image
      </h1>

      <div className="mt-6 rounded-md overflow-hidden max-h-full">
        <Image
          className="object-cover"
          src={cat.url}
          alt={'Cat-' + cat.id}
          width={cat.width}
          height={cat.height}
        />
      </div>
    </div>
  )
}

export default CatImage
