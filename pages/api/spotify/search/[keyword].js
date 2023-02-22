import SpotifyWebApi from 'spotify-web-api-node'
import { getSession } from 'next-auth/react'

const handler = async (req, res) => {
  try {
    const {
      query: { keyword }
    } = req
    const session = await getSession({ req })

    const spotifyApi = new SpotifyWebApi()
    spotifyApi.setAccessToken(session.accessToken)

    const result = await spotifyApi.searchTracks(keyword)

    if (result.statusCode === 200) {
      res.status(200).json({ success: true, data: result.body.tracks })
    } else {
      res.status(500).json({ success: false })
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message })
  }
}

export default handler
