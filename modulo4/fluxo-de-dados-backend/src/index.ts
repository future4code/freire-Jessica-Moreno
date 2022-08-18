import express from "express";
import { AddressInfo } from "net";
import { products } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

//Exercicio 1

app.get("/test", (req, res) => {
    res.send('funciona')
})

//Exercicio 3

app.post('/products', (req, res) =>{
    const newProductsList = products
    const {name, price} = req.body

    const addProduct = {
        id: Date.now().toString(),
        name: name,
        price: price
    }

    newProductsList.push(addProduct)
    res.status(200).send(newProductsList)   
})

//Exercicio 4
app.get('/products',(req,res)=>{
    const newProductsList = products

    res.status(200).send(newProductsList)
})

//Exercicio 5

app.put('/product:id', (req, res) =>{
    const id = req.params.id
})