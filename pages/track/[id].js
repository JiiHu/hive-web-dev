import React from 'react'
import { getServerSession } from 'next-auth/next'
import SpotifyWebApi from 'spotify-web-api-node'

import SpotifyTrack from 'components/SpotifyTrack'

import { authOptions } from 'pages/api/auth/[...nextauth]'

const Track = ({ track, recommendations }) => {
  const imageUrl = track.album && track.album?.images[0]?.url

  return (
    <div>
      <div className="flex items-center">
        <img
          className="object-cover w-full h-48 md:h-auto md:w-24 rounded"
          src={imageUrl}
          alt={track.album?.name}
        />

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {track.name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {track.artists.map(artist => artist.name).join(', ')}
          </p>
        </div>
      </div>

      <hr className="my-10" />

      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Recommended tracks
      </h5>

      {recommendations && (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {recommendations.map(_track => (
            <SpotifyTrack key={_track.id} track={_track} />
          ))}
        </div>
      )}
    </div>
  )
}

export async function getServerSideProps({ req, res, query }) {
  const { id } = query

  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    return { notFound: true }
  }

  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(session.accessToken)

  const result = await spotifyApi.getTracks([id])

  if (result.statusCode !== 200) {
    return { notFound: true }
  }

  const recommendations = await spotifyApi.getRecommendations({
    min_energy: 0.4,
    seed_tracks: [id],
    min_popularity: 50
  })

  const track = result.body.tracks[0]

  return {
    props: {
      track,
      recommendations: recommendations.body.tracks
    }
  }
}

export default Track
