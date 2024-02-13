import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import productsService from "../../services/productsService";

export async function DeleteProduct(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    let response: any;

    try {
        const id: string = request.params.id;
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
