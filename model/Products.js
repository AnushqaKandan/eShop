import { connection as db } from '../config/index.js'
import { hash } from 'bcrypt'
class Products{
    fetchProducts(req, res) {
        try{
            const strQry = `SELECT productID, prodName, category, prodDescription, prodURL, amount
            FROM Products;`
            db.query(strQry, (err, results) => {
                // `Unable to fetch all Products`
                if(err) throw new Error('Unable to fetch all products.')
               res.json({
            status: res.statusCode,
            results
            })
        
        })
          } catch(e){
             res.json({
                status: 404,
                msg: e.message
             })
          }
    }

recentProducts(req, res) {
    try{
        const strQry = `SELECT productID, prodName, category, prodDescription, prodURL, amount
        FROM Products
        ORDER BY productID DESC
        LIMIT 5;`
        db.query(strQry, (err, results) => {
            // `Unable to fetch all Products`
            if(err) throw new Error('Unable to fetch all products.')
           res.json({
        status: res.statusCode,
        results
        })
    
    })

    } catch(e){
        res.json({
            status: 404,
            msg: e.message
         })
    }
}

    fetchProduct(req, res) {
        try {
            const strQry = `SELECT productID, prodName, category, prodDescription, prodURL, amount
            FROM Products 
            WHERE productID = ${req.params.id};`
            
            db.query(strQry, (err, result) => {
                if(err) throw new Error(`Unable to fetch product with id ${req.params.id}`)
                res.json({
                    status: res.statusCode,
                    result: result[0]
                })
            })
        
        } catch (e) { 
            res.json({
                status: 404,
                msg: e.message
             })
        }
    }
     addProducts(req, res) {
        try{
           const strQry = `INSERT INTO Products SET ?;`

        db.query(strQry, [req.body], (err) => {
            if(err) throw new Error('Unable to add a product')
            res.json({
           status: res.statusCode, 
          msg: 'Product was added'
            })
        })
         } catch(e) {
            res.json({
                status: 400,
                msg: e.message 
            })
         }
     }
    
    updateProducts(req, res) {
        try{
        const strQry = `
        UPDATE Products
        SET ?
        WHERE productID = ${req.params.id}
        `
        db.query(strQry, [data], (err) => {
            if(err) throw new Error('Unable to update a product')
                res.json({
            status: res.statusCode,
            msg: 'The product was updated'
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
             if (err) throw new Error('Unable to delete a product.')
             res.json({
            status: res.statusCode,
            msg: "A product was removed."
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

export{
    Products
}