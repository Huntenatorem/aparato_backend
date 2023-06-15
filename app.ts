import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import routes from './src/routes'

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/api", routes)

// Para servir archivos estáticos
// app.use(express.static(path.join(__dirname, "../dist")))
app.use(express.static(path.join(__dirname, "..", "..", "dist")))

export default app