import {db} from "../database/database.connection";

export function getRandomPersonDB(){
    return db.query(`SELECT * FROM people ORDER BY random() LIMIT 1;`);
}