# Hive: Getting started with Web Development
This is project was created for a live coding session at [Hive Helsinki](https://www.hive.fi/en/). Goal of the session was to showcase how to get started with Web Development using React, Next.js, Tailwind CSS, and Spotify APIs.

Live at [hive-spotify.vercel.app](https://hive-spotify.vercel.app/).

## Step to re-proroduce the project
Here is the list of steps one needs to complete to achieve somewhat the same end result that the showcased project has. As these were written before the live presentation, there might be a step or two missing, or the steps might in a different order.

### Preparation
These steps were done before the presentation to speed up the start. Here is a full list what was done before.

- Create project with `npx create-next-app@latest` from [Next.js](https://nextjs.org/docs/getting-started)
  - If this fails, it probably means that you don't have Node installed on your machine.
  - If you don't have Node, you should install it through [node version manager (nvm)](https://github.com/nvm-sh/nvm). `nvm` allows you to later on easily change the used Node version and is the preferred way to install Node. Installing `node` without nvm might end up in messy installation at the end of the day.
- Install `eslint` rules
  - Read more about eslint from [Why (and how) to use eslint](https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7) article
  - Commands to run
    - `npm install --save @babel/eslint-parser`
    - `npx install-peerdeps --dev eslint-config-airbnb` from [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
    - `npm install --save-dev eslint-plugin-prettier` from [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
    - `npm install --save-dev eslint-config-next` from [eslint-config-next](https://www.npmjs.com/package/eslint-config-next)
    - `npm install --save-dev @next/eslint-plugin-next` from [@next/eslint-plugin-next](https://nextjs.org/docs/basic-features/eslint#eslint-plugin)
    - `npm install --save-dev eslint-config-prettier` from [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
    - `npm install eslint eslint-plugin-react --save-dev` from [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- Copy nice rules from my previous projects to `.eslintrc.js` and `.prettierrc.js`
  - You can see the end result on these files as there is no source to be shared
- Reseting styles & moving used font to `_app.js` for global usage

### "Actual" coding
Here are the things which are part of the live coding session.

- Empty `index.js` from Vercel's placeholder
- Create basic components like `Button` and `Input`
- Implement basic search functionality to homepage
- [Install Tailwind](https://tailwindcss.com/docs/guides/nextjs)
- Create application to [Spotify for Developers](https://developer.spotify.com/dashboard/applications)
- [Install `spotify-web-api-node`](https://github.com/thelinmichael/spotify-web-api-node)
- [Install NextAuth.js](https://next-auth.js.org/getting-started/example)
  - Custom scopes
  - Custom callbacks for `session` and `jwt`
- Create `.env` file
  - `JWT_SECRET`
    - Created using `jose newkey -s 512 -t oct -a HS512`
  - `NEXTAUTH_URL`
    - `http://localhost:3000`
- Create login/logout button which takes into account if you are logged in or not
- Create endpoint to `api` folder and list songs on homepage
- Create subpage for single track
  - List the song details
  - List recommended songs
- Deploy the application on Vercel.com

### Fixing the project after presentation
It seems that the NextAuth Secret was incorrectly set. How it was fixed:
- Renamed the variable as the default one with key `NEXTAUTH_SECRET`
- Created this with the [suggested command](https://next-auth.js.org/configuration/options#secret) of `openssl rand -base64 32`
- Set the value from the command above to Vercel Environment Variables as `NEXTAUTH_SECRET`
- Changed `getSession` to `getServerSession` in the `/api/spotify/search/[keyword]` as it seems that the newest NextAuth works differently than what I was used to

In addition to the fixes, I improved the UI a bit and added a separate page for single Spotify tracks.


## Main Tools
- [Next.js](https://nextjs.org/) as framework
- [Tailwind CSS](https://tailwindcss.com/) for styles
- [Flowbite](https://flowbite.com/) for Tailwind component styles
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/) through [spotify-web-api-node](https://github.com/thelinmichael/spotify-web-api-node)
- [NextAuth.js](https://next-auth.js.org/) to authenticate with Spotify


## Notes
While working on this, I came across this amazing tutorial: [🔴 Let's build Spotify 2.0 with NEXT.JS 12.0!](https://www.youtube.com/watch?v=3xrko3GpYoU). If you are interested on expanding this small app, the video is definitely worth checking out.
