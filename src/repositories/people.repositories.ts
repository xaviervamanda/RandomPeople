import {db} from "../database/database.connection";

type Person = {
    id: number;
    firstName: string;
    lastName: string;
}
export function getRandomPersonDB(){
    return db.query<Person>(`SELECT * FROM people ORDER BY random() LIMIT 1;`);
}