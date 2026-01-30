import "dotenv/config";
import express from 'express';
import cors from 'cors';
import superheroRouter from './superhero/superhero.routes.js'


const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}
));

app.use(express.json())

app.use('/api/superheroes', superheroRouter)



export default app;