import express, { Request, Response } from 'express';
import ProductModel from '../models/product-model';
import Product from '../types/product-type';
import jwt from 'jsonwebtoken';


const productmodel = new ProductModel();

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productmodel.index();
        res.send(products);
    }
    catch (err) {
        console.log(err);
    }
}


const getProduct = async (req: Request, res: Response) => {
    try {
        const product = await productmodel.show(req.body.name);
        res.send(product);
    }
    catch (err) {
        console.log(err);
    }
}



const createProduct = async (req: Request, res: Response) => {
    try {
        const authorizationHeader = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET as string)
    } catch (err) {
        res.status(401)
        console.log(err);
        res.json('Access denied, invalid token')
        return
    }

    const product: Product = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
    }
    try {
        const newProduct = await productmodel.create(product)
        res.status(200);
        res.json(`You have created your product ${newProduct.name} successfully`);
    } catch (err) {
        console.log(err);
        res.status(400)
        res.json(err as string + product)
    }

}




const productRoutes = (app: express.Application) => {
    app.get('/indexProducts', getAllProducts)
    app.get('/showProduct', getProduct)
    app.post('/createProduct', createProduct)
}




export default productRoutes;