import express from 'express';
import cors from 'cors';
import authRouter from './routes/user.route.js'
import dotenv from 'dotenv'
import connectToDB from './DB/db.js';


dotenv.config();

const app = express();
app.use(cors()); 
app.use(express.json());
app.use('/api/auth', authRouter);

app.listen(5000,() => {
    connectToDB();
    console.log("Server is running");
}) 

