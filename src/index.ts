import express, { Request, Response } from "express";
import { PORT } from "./secrets";
const app = express();

app.get('/', (req:Request, res:Response) => {
  res.send("CV Prime Pro Server")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
