import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const LIMIT = '16kb'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:LIMIT}))

app.use(express.urlencoded({extended: true,limit:LIMIT}))

app.use(express.static('public'))

app.use(cookieParser())



export { app }