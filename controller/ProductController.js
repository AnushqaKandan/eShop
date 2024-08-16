import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { product} from '../model/Products.js'

const productRouter = express.Router()

productRouter.use(bodyParser.json())

productRouter.get('/', (req, res) => {
    product.fetchProducts(req, res)
})

productRouter.get('/:id', (req, res) => {
    product.fetchProducts(req, res)
})


productRouter.post('/add', (req, res) => {
    product.addProducts(req, res)
})

productRouter.patch('/product/:id,', (req, res) => {
product.updateUser(req, res)
})

productRouter.delete('./product/:id', (req, res) => {
    product.deleteProduct(req, res)
})

