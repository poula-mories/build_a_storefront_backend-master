import db from '../databaseConnection';
import User from '../types/user-type';

class UserModel {

    async index(): Promise<User[]> {
        try {

            const connenction = await db.connect()
            const sql = 'SELECT * FROM users'

            const result = await connenction.query(sql)

            connenction.release()

            return result.rows
        } catch (err) {
            throw new Error(`Could not get users. Error: ${err}`)
        }
    }


    async show(id: number): Promise<User> {
        try {
            const sql = `SELECT * FROM users WHERE id=($1)`
            // @ts-ignore
            const connenction = await db.connect()

            const result = await connenction.query(sql, [id])

            connenction.release()

            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find users ${id}. Error: ${err}`)
        }
    }


    async create(u: User): Promise<User> {
        try {
            const sql = 'INSERT INTO users (firstname, lastname, password, username) VALUES($1, $2, $3, $4) RETURNING *'
            // @ts-ignore
            const connenction = await db.connect()

            const result = await connenction
                .query(sql, [u.firstName, u.lastName, u.password, u.username])

            const user = result.rows[0]

            connenction.release()

            return user
        } catch (err) {
            throw new Error(`Could not add new user ${u.username}. Error: ${err}`)
        }
    }






}

export default UserModel;