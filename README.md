# Download YouTube videos with JS

This is a simple REST API built on ExpressJS that allows you to download YouTube videos by their ID.

## Installation

To install and run this application, you will need to have Node.js and Docker installed on your machine.

1. Clone this repository to your local machine.
1. Run `docker build -t youtube-downloader .` to build the Docker image.
1. Run `docker run -p 3003:3003 youtube-downloader` to start the container.

The API should now be accessible at http://localhost:3003.

## Usage

The API has two endpoints:

### Home

`GET /`

This endpoint returns a simple message indicating that the API is online.

### Download

`GET /download/:id`

This endpoint takes a YouTube video ID as a parameter and downloads the video. The video is then returned as the response. If the video cannot be downloaded, an error message will be returned instead.

Example request:

```
GET http://localhost:3003/download/dQw4w9WgXcQ
```

## Notes

- This application uses the `nikolaik/python-nodejs` image from Docker Hub, which includes both Python and Node.js. This is because the application uses a Python package called `youtube-dl` to download the videos.
- By default, the application will download the highest quality version of the video available. If you want to download a specific version, you can pass additional options to the `youtube-dl` command. For more information, see the `youtube-dl` documentation.
- This application is intended for personal use only. Downloading copyrighted material may be illegal in your country.
