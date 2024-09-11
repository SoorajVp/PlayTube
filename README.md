# PlayTube Video Web Application

A web app using the YouTube API where users can watch videos. Built with a responsive UI for a smooth video browsing experience.

Utilized React + Typescript + TailwindCSS + redux-toolkit

## Get Started

### Clone the repository

`git clone https://github.com/SoorajVp/PlayTube.git` 

### Install the npm dependencies.

`cd PlayTube` 
`npm install`


### Configure the API Key for youtube-video api access. 

- Api doesn't allow unregistered callers (callers without established identity). 

- Please use API Key or other form of API consumer identity to call this API.

- Check the [youtube-videos-api](https://developers.google.com/youtube/v3/docs/videos) documentation for more information


```js
// src/constant.ts

const API_KEY: string = "" // Added you api key here

export const VIDEOLIST_API_URL: string = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

export const VIDEO_WATCH_URL: string = "https://www.youtube.com/embed/"

```

### Run the project.

`npm run dev`