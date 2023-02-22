import SpotifyWebApi from 'spotify-web-api-node'
import { getServerSession } from 'next-auth/next'
import { authOptions } from 'pages/api/auth/[...nextauth]'

const handler = async (req, res) => {
  try {
    const {
      query: { keyword }
    } = req

    const session = await getServerSession(req, res, authOptions)
    if (!session) {
      throw new Error('No session found')
    }

    const spotifyApi = new SpotifyWebApi()
    spotifyApi.setAccessToken(session.accessToken)

    const result = await spotifyApi.searchTracks(keyword)

    if (result.statusCode === 200) {
      res.status(200).json({ success: true, data: result.body.tracks })
    } else {
      res.status(500).json({ success: false, message: 'Error with Spotify API' })
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message })
  }
}

export default handler
