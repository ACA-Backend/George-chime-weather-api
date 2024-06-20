import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import {createServer} from 'http'
import expressListRoutes from 'express-list-routes'
import { appRouter } from '../routes/app.route.js'
import ErrorMiddleware from '../app/middleware/error.middleware.js'

const app = express()
const server = createServer(app);

app.use(cors())
app.use(helmet())
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Define the health route
app.use('/health', (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'Application is up and running'
    })
})
// Define all the other routes
app.use('/api/v1', appRouter)
// Define a catch all route for every other thing
app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'The requested route does not exist on this server'
    })
})
app.use(ErrorMiddleware)
expressListRoutes(app);


export {
    server, app
}