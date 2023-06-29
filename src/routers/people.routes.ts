import { Router } from "express";
import { getPerson } from "../controllers/people.controllers";

const personsRouter = Router();

personsRouter.get("/person", getPerson);

export default personsRouter;