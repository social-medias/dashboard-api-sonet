import './suppress-warnings.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

let registros = [];

app.post('/api/log', (req, res) => {
	const data = {
		recebido_em: new Date().toISOString(),
		dados: req.body
	};

	registros.push(data);

	console.log("📥 NOVO REGISTRO RECEBIDO:");
	console.log(data);

	res.json({ status: "OK", id: registros.length });
});

app.get("/api/registros", (req, res) => {
	res.json(registros);
});

app.get("/dashboard", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(8080, () => {
	console.log("running in port: 8080");
});
