import Link from 'next/link'

import { getBreeds } from '@/api/cat'
import { CatBreed } from '@/model/app.model'

const BreedsPage = async () => {
  const breeds = await getBreeds()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {breeds.map((breed: CatBreed) => (
        <Link
          key={breed.id}
          className="pl-2 py-4 bg-white rounded-md shadow"
          href={`/breeds/${breed.id}`}
        >
          {breed.name}
        </Link>
      ))}
    </div>
  )
}

export default BreedsPage
