import { app } from "./app.js"

const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`)
})