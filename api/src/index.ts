import { app } from "@azure/functions";
import { CreateProduct } from "./functions/CreateProduct";
import { DeleteProduct } from "./functions/DeleteProduct";
import { UpdateProduct } from "./functions/UpdateProduct";

app.http('CreateProduct',{
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: CreateProduct
})

app.http('DeleteProduct', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: DeleteProduct
});

app.http('UpdateProduct', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: UpdateProduct
});