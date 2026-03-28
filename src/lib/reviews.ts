export type GoogleReview = {
  author_name: string
  rating: number
  text: string
  time: number
  relative_time_description: string
  photo_url: string
}

export async function getGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) return []

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=no`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'reviews',
        },
        next: { revalidate: 86400 },
      }
    )
    const data = await res.json()

    return (data.reviews ?? []).map((r: {
      authorAttribution: { displayName: string; photoUri?: string }
      rating: number
      text: { text: string }
      publishTime: string
      relativePublishTimeDescription: string
    }) => ({
      author_name: r.authorAttribution.displayName,
      rating: r.rating,
      text: r.text.text,
      time: Math.floor(new Date(r.publishTime).getTime() / 1000),
      relative_time_description: r.relativePublishTimeDescription,
      photo_url: r.authorAttribution.photoUri ?? '',
    }))
  } catch {
    return []
  }
}
