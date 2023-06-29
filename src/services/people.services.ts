import { getRandomPersonDB } from "../repositories/people.repositories";
export function getRandomPerson(){
    return getRandomPersonDB();
}