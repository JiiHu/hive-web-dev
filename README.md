# Hive: Getting started with Web Development
This is project was created for a live coding session at [Hive Helsinki](https://www.hive.fi/en/). Goal of the session was to showcase how to get started with Web Development using React, Next.js, Tailwind CSS, and Spotify APIs.

## Step to re-proroduce the project
Here is the list of steps one needs to complete to achieve somewhat the same end result that the showcased project has. As these were written before the live presentation, there might be a step or two missing, or the steps might in a different order.

### Preparation
These steps were done before the presentation to speed up the start. Here is a full list what was done before.
- Create project with `npx create-next-app@latest` from [Next.js](https://nextjs.org/docs/getting-started)
  - If this fails, it probably means that you don't have Node installed on your machine.
  - If you don't have Node, you should install it through [node version manager (nvm)](https://github.com/nvm-sh/nvm). `nvm` allows you to later on easily change the used Node version and is the preferred way to install Node. Installing `node` without nvm might end up in messy installation at the end of the day.
- Install eslint rules
  - `npm install --save @babel/eslint-parser`
  - `npx install-peerdeps --dev eslint-config-airbnb` from [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
  - `npm install --save-dev eslint-plugin-prettier` from [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
  - `npm install --save-dev eslint-config-next` from [eslint-config-next](https://www.npmjs.com/package/eslint-config-next)
  - `npm install --save-dev @next/eslint-plugin-next` from [@next/eslint-plugin-next](https://nextjs.org/docs/basic-features/eslint#eslint-plugin)
  - `npm install --save-dev eslint-config-prettier` from [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
  - `npm install eslint eslint-plugin-react --save-dev` from [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- Copy nice rules from my previous projects to `.eslintrc.js` and `.prettierrc.js`
- Reset styles & move used font to `_app.js`

### "Actual" coding
- Create basic components like `Button` and `Input`
- [Install Tailwind](https://tailwindcss.com/docs/guides/nextjs)
- Create application to [Spotify for Developers](https://developer.spotify.com/dashboard/applications)
- [Install NextAuth.js](https://next-auth.js.org/getting-started/example)
  - Custom scopes
  - Custom callbacks for `session` and `jwt`
- Create `.env` file
  - `JWT_SECRET`
    - Created using `jose newkey -s 512 -t oct -a HS512`
  - `NEXTAUTH_URL`
    - `http://localhost:3000`
- [Install `spotify-web-api-node`](https://github.com/thelinmichael/spotify-web-api-node)

## Main Tools
- [Next.js](https://nextjs.org/) as framework
- [Tailwind CSS](https://tailwindcss.com/) for styles
- [Flowbite](https://flowbite.com/) for Tailwind component styles
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/) through [spotify-web-api-node](https://github.com/thelinmichael/spotify-web-api-node)
- [NextAuth.js](https://next-auth.js.org/) to authenticate with Spotify


## Notes
While working on this, I came across this amazing tutorial: [🔴 Let's build Spotify 2.0 with NEXT.JS 12.0!](https://www.youtube.com/watch?v=3xrko3GpYoU). If you are interested on expanding this small app, the video is definitely worth checking out.