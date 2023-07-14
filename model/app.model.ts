export type NavLink = {
  name: string
  href: string
}

export type CatImage = {
  id: string
  url: string
  width: number
  height: number
  breeds?: CatBreed[]
  favourite?: {}
}

/*
  weight: { imperial: '10 - 15', metric: '5 - 7' },
  id: 'cspa',
  name: 'California Spangled',
  temperament: 'Affectionate, Curious, Intelligent, Loyal, Social',
  origin: 'United States',
  country_codes: 'US',
  country_code: 'US',
  description: 'Perhaps the only thing about the California spangled cat that isn’t wild-like is its personality. Known to be affectionate, gentle and sociable, this breed enjoys spending a great deal of time with its owners. They are very playful, often choosing to perch in high locations and show off their acrobatic skills.',
  life_span: '10 - 14',
  indoor: 0,
  alt_names: 'Spangle',
  adaptability: 5,
  affection_level: 5,
  child_friendly: 4,
  dog_friendly: 5,
  energy_level: 5,
  grooming: 1,
  health_issues: 1,
  intelligence: 5,
  shedding_level: 1,
  social_needs: 3,
  stranger_friendly: 4,
  vocalisation: 1,
  experimental: 0,
  hairless: 0,
  natural: 0,
  rare: 0,
  rex: 0,
  suppressed_tail: 0,
  short_legs: 0,
  wikipedia_url: 'https://en.wikipedia.org/wiki/California_Spangled',
  hypoallergenic: 0,
  reference_image_id: 'B1ERTmgph'
*/
export type CatBreed = {
  weight: any
  id: string
  name: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: number
  alt_names: string
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppressed_tail: number
  short_legs: number
  wikipedia_url: string
  hypoallergenic: number
  reference_image_id: string
}
