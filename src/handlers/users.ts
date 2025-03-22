import express, { Request, Response } from 'express';
import UserModel from '../models/user-model';
import User from '../types/user-type';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const usermodel = new UserModel();

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const authorizationHeader = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET as string)
    } catch (err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
    try {
        const users = await usermodel.index();
        res.send(users);
    }
    catch (err) {
        console.log(err);
    }
}


const getUser = async (req: Request, res: Response) => {
    try {
        const authorizationHeader = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET as string)
    } catch (err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
    try {
        const user = await usermodel.show(req.body.id);
        res.send(user);
    }
    catch (err) {
        console.log(err);
    }
}



const create = async (req: Request, res: Response) => {


    const user: User = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        username: req.body.username,
    }
    try {
        user.password = bcrypt.hashSync(user.password + process.env.BCRYPT_PASSWORD, parseInt(process.env.SALT_ROUNDS as string));
        const newUser = await usermodel.create(user)
        // var token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET as string);
        res.status(200);
        res.json(`User ${newUser.username} created successfully`);
    } catch (err) {
        console.log(err);
        res.status(400)
        res.json(err as string + user)
    }

}



const authenticate = async (req: Request, res: Response) => {
    const user: User = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
    }
    try {
        // const newUser = await usermodel.create(user)
        var token = jwt.sign({ user }, process.env.TOKEN_SECRET as string);
        res.json(token)
    } catch (err) {
        console.log(err);
        res.status(400)
        res.json(err as string + user)
    }

}









const userRoutes = (app: express.Application) => {
    app.get('/indexUsers', getAllUsers)
    app.get('/showUser', getUser)
    app.post('/createUser', create)
    app.post('/authenticateUser', authenticate)
}

export default userRoutes;