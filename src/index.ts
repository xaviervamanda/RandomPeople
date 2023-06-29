import express from "express";
import dotenv from "dotenv";
import personsRouter from "./routers/people.routes";

const app = express();
app.use(express.json());
app.use(personsRouter);
dotenv.config();

app.get('/health', (_req, res) => res.send('OK!'))

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
});