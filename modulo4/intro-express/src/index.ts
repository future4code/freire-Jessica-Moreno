import express from "express";
import cors from "cors";

import { AddressInfo } from "net";

const app = express();
app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

//Exercicio 1

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

//Exercicio 2

type user ={
id: number,
name: string,
phone: string,
email: string,
website: string
}

//Exercicio 3

const userList: user[] = [
    {
        id: 1,
        name:"Jennie",
        phone:"(272) 790-0888",
        email:"jennie.nichols@example.com",
        website:"http://jennie-nichols.com"
    },
    {
        id: 2,
        name:"Jennie",
        phone:"(272) 790-0888",
        email:"jennie.nichols@example.com",
        website:"http://jennie-nichols.com"
    },
    {
        id: 3,
        name:"Jennie",
        phone:"(272) 790-0888",
        email:"jennie.nichols@example.com",
        website:"http://jennie-nichols.com"
    },
    {
        id: 4,
        name:"Jennie",
        phone:"(272) 790-0888",
        email:"jennie.nichols@example.com",
        website:"http://jennie-nichols.com"
    }

    
]
