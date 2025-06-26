import express from "express";
import cors from 'cors';
import router from "./routes/bookRoutes.js";

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/books', router)

const PORT = 3001;
app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)})