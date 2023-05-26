import express from 'express'
import handlebars  from 'express-handlebars'
import __dirname from './src/utils.js'
const app = express()

import studentRouter from './src/routes/student.router.js'
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(`${__dirname}/public`))

app.engine('handlebars',handlebars.engine())
app.set('views',`${__dirname}/views`)
app.set('views engine','handlebars')
app.use('/api/students/',studentRouter)

app.listen(8085,() => console.log('Listening on port 8085'))