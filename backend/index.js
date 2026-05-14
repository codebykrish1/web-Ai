import express from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import connectDB from './database/db.js'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
const app=express()

const PORT=process.env.PORT ||3000

//middleware

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use('/api/auth',authRoutes)


app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running on port:${PORT}`);
})