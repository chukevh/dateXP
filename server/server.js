import express from "express";


const app = express()

app.use(express.json())

app.get("/", (req,res) => {
    res.status(200).json("api running")
})

app.listen(5000, () => {
    console.log("server is running on port 5000")
})