import express from 'express'
import mongoose from 'mongoose'
const app = express()
const port = 3001


mongoose
   .connect( url: 'mongodb+srv://meutoi:12344@itschoool.hqclt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
options: {
    useNewUrlParser: true,
})
.then(() => console.log('MongoDb ok'))
.catch(() => console.log('MongoDb error'))