import { log } from "console"
import express from "express"

const app = express()

app.get("/backpack-addon", (req, res) => {
    res.download("./Addon/BackpackAddon.zip")  
    log("User Connected.")
})

app.listen(80, () => {
    log("ModelStore Downloader... Running")
})