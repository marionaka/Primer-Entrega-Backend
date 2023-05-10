import express from 'express';
import { productsRouter } from "./routers/products.routers.js";
import { cartsRouter } from "./routers/carts.routers.js";


const app = express();


app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/api/products', productsRouter);

app.use('/api/carts', cartsRouter);


app.listen(8080, ()=>{
    console.log('Escuchando en el puerto 8080');
})