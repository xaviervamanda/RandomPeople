import { getRandomPersonDB } from "../repositories/people.repositories";
import { internalError, notFoundError } from "../errors/errors";
export async function getRandomPerson(){
    try {
        const person = await getRandomPersonDB();
        if (person.rowCount === 0) {
            throw notFoundError ();
        }
        return person;
      } catch (error) {
        console.log(error); 
        throw internalError();
      }
}