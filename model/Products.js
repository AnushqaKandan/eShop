import { connection as db } from '../config/index.js'
import { hash } from 'bcrypt'
class Products{
    fetchProducts(req, res) {
        try{
            const strQry = `SELECT productID, prodName, category, prodDescription, prodURL, amount
            FROM Producst;`
            db.query(strQry, (err, result) => {
                // `Unable to fetch all Products`
                if(err) throw new Error('Issue when retrieving all products.')
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
    }

    fetchProducts(req, res) {
        try {
            const strQry = `SELECT productID, prodName, category, prodDescription, prodURL, amount
            FROM Producst 
            WHERE productID = ${req.params.id};`
            
            db.query(strQry, (err, result) => {
                if(err) throw new Error(`Unable to fetch product with id ${req.params.id}`)
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
    }

    async AddProducts(req, res) {
        try{
            let data = req.body
            if(data.prodURL)
             data.prodURL = await hash(data.prodURL, 12)
         // Payload
         let product = {
             prodDescription: data.prodDescription,
             prodURL: data.prodURL
         }
         let strQry = `
         INSERT INTO Products
         SET ?; `
         db.query(strQry, [data], (err) => {})
         } catch(e) {
     
         }
     }
    
     async updateProducts(req, res) {
        try{
            let data = req.body
            if(data.prodURL) {
                data.prodURL = await hash(data.prodURL, 12)
            }
        const strQry = `
        UPDATE Products
        SET ?
        WHERE productID = ${req.params.id}
        `
        db.query(strQry, [data], (err) => {
            if(err) throw new Error('Unable to update a product')
                res.json({
            status: res.statusCode,
            msg: "The product record was updated"
          })
        })
      } catch(e) {
        res.json({
            status: 400,
            msg: e.message
        })
      }
     }
    
     deleteProducts(req, res) {
        try{
            const strQry = `
            DELETE FROM Products
            WHERE productID = ${req.params.id};
            `
            db.query(strQry, (err) => {
             if (err) throw new Error('To delete a product, please review your delete query.')
             res.json({
            status: res.statusCode,
            msg: "A product\'s information was removed."
            })
          })
        } catch(e) {
            res.json({
                status: 404,
                msg: e.message
             })
        }
     }
    
    

}