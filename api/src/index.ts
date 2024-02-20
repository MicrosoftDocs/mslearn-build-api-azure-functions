import { app } from "@azure/functions";
import { CreateProduct } from "./functions/CreateProduct";
import { DeleteProduct } from "./functions/DeleteProduct";
import { UpdateProduct } from "./functions/UpdateProduct";
import { GetProducts } from "./functions/GetProducts";

app.http('CreateProduct',{
    methods: ['POST'],
    route: 'products',
    authLevel: 'anonymous',
    handler: CreateProduct
});

app.http('DeleteProduct', {
    methods: ['DELETE'],
    route: 'products/:id',
    authLevel: 'anonymous',
    handler: DeleteProduct
});

app.http('UpdateProduct', {
    methods: ['PUT'],
    route: 'products/:id',
    authLevel: 'anonymous',
    handler: UpdateProduct
});

app.http('GetProducts', {
    methods: ['GET'],
    route: 'products',
    authLevel: 'anonymous',
    handler: GetProducts
});