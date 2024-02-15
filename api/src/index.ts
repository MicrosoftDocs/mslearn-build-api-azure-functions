import { app } from "@azure/functions";
import { CreateProduct } from "./functions/CreateProduct";
import { DeleteProduct } from "./functions/DeleteProduct";
import { GetProducts } from "./functions/GetProducts";
import { UpdateProduct } from "./functions/UpdateProduct";

app.http('CreateProduct',{
    methods: ['POST'],
    route: 'product',
    authLevel: 'anonymous',
    handler: CreateProduct
})

app.http('DeleteProduct', {
    methods: ['DELETE'],
    route: 'product/{id}',
    authLevel: 'anonymous',
    handler: DeleteProduct
});

app.http('GetProducts', {
    methods: ['GET'],
    route: 'products',
    authLevel: 'anonymous',
    handler: GetProducts
});

app.http('UpdateProduct', {
    methods: ['PUT'],
    route: 'product',
    authLevel: 'anonymous',
    handler: UpdateProduct
});