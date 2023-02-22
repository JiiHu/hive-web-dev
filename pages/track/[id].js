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

// Everything that is inside this function, runs on server
export async function getServerSideProps({ req, res, query }) {
  const { id } = query

  const session = await getServerSession(req, res, authOptions)

  // Show this page for only logged in people
  if (!session) {
    return { notFound: true }
  }

  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(session.accessToken)

  const result = await spotifyApi.getTracks([id])

  // If spotify returns error, lets say that the page is not found
  if (result.statusCode !== 200) {
    return { notFound: true }
  }

  const recommendations = await spotifyApi.getRecommendations({
    min_energy: 0.4,
    seed_tracks: [id],
    min_popularity: 50
  })

  // Just take the first track from results to make it easy
  const track = result.body.tracks[0]

  return {
    props: {
      // Everything inside this object, will be returned as prop to the <Track /> component above
      track,
      recommendations: recommendations.body.tracks
    }
  }
}

export default Track
