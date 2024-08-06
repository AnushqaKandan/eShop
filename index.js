import express from 'express'
import path from 'path'
import {connection as db} from './config/index.js'
// Create an express app
const app = express()
const port = +process.env.PORT  || 4000
const router = express.Router()

// Middleware
app.use(router, express.static('./static'),
express.json(),
express.urlencoded({extended: true})
)
// Endpoint
router.get('^/$|/eShop', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
router.get('/users', (req, res) => {
  try{
    const strQry = `SELECT firstName, lastName, age, emailAdd FROM Users;`
    db.query(strQry, (err, result) => {
        // `Unable to fetch all users`
        if(err) throw new Error(err)
       res.json({
    status: res.statusCode,
    result
    })

   })
  } catch(e){
     res.json({
        status: 404,
        msg: e.message
     })
  }
})

router.get('/user/:id', async (req, res) => {
    try {
        const strQry = `SELECT userID, firstName, lastName, age, emailAdd 
        FROM Users WHERE userID = ${req.params.id};`
        
        db.query(strQry, (err, result) => {
            if(err) throw new Error(`Unable to fetch user with id ${req.params.id}`)
            res.json({
                status: res.statusCode,
                result
            })
        })
    
    } catch (e) { 
        res.json({
            status: 404,
            msg: e.message
         })
    }
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

