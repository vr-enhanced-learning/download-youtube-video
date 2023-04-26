const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})


app.get("/", (_, res) => {
    res.status(200).send("API Online!")
})

