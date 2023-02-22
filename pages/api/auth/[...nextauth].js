import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

// List all the Spotify scopes we want to use. This list will give basically
// access to everything you can do through Spotify APIs
const scopes = [
  'ugc-image-upload',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'app-remote-control',
  'streaming',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-private',
  'playlist-modify-public',
  'user-follow-modify',
  'user-follow-read',
  'user-read-playback-position',
  'user-top-read',
  'user-read-recently-played',
  'user-library-modify',
  'user-library-read',
  'user-read-email',
  'user-read-private'
]

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // Configuration options are here:
    // https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/providers/spotify.ts
    SpotifyProvider({
      authorization: `https://accounts.spotify.com/authorize?scope=${scopes.join(',')}`,
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({ session, token }) {
      // Send accessToken to the client so we can use it later on
      // eslint-disable-next-line no-param-reassign
      session.accessToken = token.accessToken

      return session
    },
    async jwt({ token, account }) {
      if (account) {
        // Save access token to JWT token for later use
        // eslint-disable-next-line no-param-reassign
        token.accessToken = account.access_token
        // eslint-disable-next-line no-param-reassign
        token.refreshToken = account.refresh_token
      }

      return token
    }
  }
}
export default NextAuth(authOptions)
