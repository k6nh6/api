import  express  from "express";
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";



export  const app = express();
config({
    path:"./data/config.env"
})

app.use(express.json())
app.use(cookieParser())
app.use(cors(
    {
        origin: [process.env.FRONTEND_URL],
        methods:['GET','POST', 'PUT', 'DELETE'],
        credentials:true
    }

))

// Using routes 
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tasks", taskRouter)

//using error middleware
app.use(errorMiddleware)