import {userRouter, express} from './controller/UserController.js'
import { productRouter} from './controller/ProductController.js'
import path from 'path'

// Create an express app
const app = express()
const port = +process.env.PORT  || 4000
const router = express.Router()

// Middleware
app.use(router, 
'/user', userRouter,
'/product', productRouter,
express.static('./static'),
express.json(),
express.urlencoded({extended: true})
)

app.use('/user', userRouter)
app.use('/product', productRouter)

// Endpoint
// get allows us to retrieve data. Better to use it to retrieve data than to send data
router.get('^/$|/eShop', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

router.get('*', (req, res) => {
    res.json({
        status: 404,
        msg: 'Resource not found'
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

