export async function getCatBreedById(id: string) {
  const res = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getBreeds() {
  const res = await fetch('https://api.thecatapi.com/v1/breeds')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getCatImageById(id: string) {
  const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getCatImages(breed_ids: string = '', limit: number = 10) {
  const searchParams = new URLSearchParams({
    limit: limit.toString(),
  })

  if (breed_ids !== '') {
    searchParams.append('breed_ids', breed_ids)
  }

  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?${searchParams.toString()}`,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
