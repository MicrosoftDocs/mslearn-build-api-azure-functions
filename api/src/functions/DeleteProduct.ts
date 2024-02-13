import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import productsService from "../../services/productsService";
import { Interface } from "readline";

interface Product {
    id: string;
    brand: {
        name: string;
    };
}

export async function DeleteProduct(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    let response: any;

    try {
        const id = request.params.id;
        const body = await request.json();
        const brand = JSON.stringify(body);
        const brandName = JSON.parse(brand).brand.name;

        context.log(`Id: ${id}, Brand: ${brandName}`)

        response = await productsService.delete(id);

        return {
            status: 200,
            body: response,
        };
    } catch (error) {
        return {
            status: 500,
            body: error.message,
        };
    }
};

app.http('DeleteProduct', {
    methods: ['DELETE'],
    route: 'product/{id}',
    handler: DeleteProduct
});
