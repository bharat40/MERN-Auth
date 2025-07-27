import express from 'express';
import { configDotenv } from 'dotenv';
configDotenv();
const app = express();

// test api
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to home page'
    })
})


// server code
app.listen(process.env.PORT, () => {
    console.log('server is running on port', process.env.PORT);
})