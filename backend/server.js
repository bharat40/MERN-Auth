import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/User.routes.js';
import protectedRoutes from './routes/Protected.routes.js';
import connectDatabase from './database/Db.js';
configDotenv();
const app = express();

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors());


// test api
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to home page'
    })
})

// auth api
app.use('/api/auth', userRoutes);
app.use('/api', protectedRoutes);


// server code

connectDatabase().then(() => {
    app.listen(process.env.PORT, () => {
        console.log('server is running on port', process.env.PORT);
    })
}).catch((error) => {
    console.error(error);
})
