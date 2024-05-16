const express=require('express')
const app=express()
const router=express.Router()
const cors=require('cors')
const connection=require('./db/connect')
const bookingsRouter=require('./routes/bookingsRoute')

app.use(cors())
app.use(express.json())

app.use('/api/v1/shine',router)
app.use('/api/v1/shine/bookings',bookingsRouter)

const dotenv=require('dotenv')
dotenv.config()

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log('App listening on port',PORT)
})

app.get('/api/v1/shine',(request,response)=>{
    response.send("Welcome to Shine's Server")
})





