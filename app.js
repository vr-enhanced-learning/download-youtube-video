const express = require("express")
const youtubedl = require("youtube-dl-exec")
const path = require("path")
const fs = require("fs").promises

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3003

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})


app.get("/", (_, res) => {
    res.status(200).send("API Online!")
})


app.get("/download/:id", async (req, res) => {
    const origin = req.headers.origin
    const videoId = req.params.id
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
    const options = {
        output: `${videoId}.mp4`,
    }

    try {
        await youtubedl(videoUrl, options)
        const absPath = path.resolve(`./${videoId}.mp4`)

        if (origin != undefined) {
            res.setHeader("Access-Control-Allow-Origin", origin)
            res.setHeader(
                "Access-Control-Allow-Methods",
                "GET, POST, PUT, DELETE",
                "OPTIONS"
            )
            res.setHeader(
                "Access-Control-Allow-Headers",
                "Content-Type, Authorization"
            )
            res.setHeader("Access-Control-Allow-Credentials", true)
            res.setHeader("Vary", "Origin")
        }

        res.sendFile(absPath, async () => {
            try {
                await fs.unlink(absPath)
                console.log(`Deleted file: ${absPath}`)
            } catch (err) {
                console.error(err)
            }
        })
    } catch (error) {
        console.error(error)
        res.status(500).send("Failed to download video")
    }
})
