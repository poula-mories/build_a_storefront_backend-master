import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config();

let db: Pool;

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    ENV,
    POSTGRES_HOST_TEST,
    POSTGRES_DB_TEST,
    POSTGRES_USER_TEST,
    POSTGRES_PASSWORD_TEST,
} = process.env

if (ENV == "dev") {
    db = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    })
} else {
    db = new Pool({
        host: POSTGRES_HOST_TEST,
        database: POSTGRES_DB_TEST,
        user: POSTGRES_USER_TEST,
        password: POSTGRES_PASSWORD_TEST,
    })
}

export default db