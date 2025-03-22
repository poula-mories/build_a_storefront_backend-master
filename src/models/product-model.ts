import db from '../databaseConnection';
import Product from '../types/product-type';

class ProductModel {

    async index(): Promise<Product[]> {
        try {

            const connenction = await db.connect()
            const sql = 'SELECT * FROM products'

            const result = await connenction.query(sql)

            connenction.release()

            return result.rows
        } catch (err) {
            throw new Error(`Could not get products. Error: ${err}`)
        }
    }


    async show(name: string): Promise<Product> {
        try {
            const sql = `SELECT * FROM products WHERE name=($1)`
            // @ts-ignore
            const connenction = await db.connect()

            const result = await connenction.query(sql, [name])

            connenction.release()

            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find products ${name}. Error: ${err}`)
        }
    }


    async create(p: Product): Promise<Product> {
        try {
            const sql = 'INSERT INTO products (name, price) VALUES($1, $2) RETURNING *'
            // @ts-ignore
            const connenction = await db.connect()

            const result = await connenction
                .query(sql, [p.name, p.price])

            const product = result.rows[0]

            connenction.release()

            return product
        } catch (err) {
            throw new Error(`Could not add new product ${p.name}. Error: ${err}`)
        }
    }


}

export default ProductModel;