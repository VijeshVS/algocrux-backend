import express from "express"

const app = express()
app.use(express.json())

app.get("/health", (req, res) => {
    res.status(200).send({ status: "OK" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});