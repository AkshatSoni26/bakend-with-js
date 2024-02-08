import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'


dotenv.config({
    path: './env'
})



connectDB()
.then(
    () => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`SERVER IS RUNNING ON PORT: ${process.env.PORT}`)

            app.on('error', (error) => {
                console.log('APP is not connected.', error)
                throw new Error('App is Not Connected.', error)
            })
        })
    }
)
.catch(
    (err) => {
        console.error("MonogoDB connection failed!!!", err);
    }
)