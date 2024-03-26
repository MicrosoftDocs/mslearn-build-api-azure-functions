import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import productService from "../services/product.services";

export async function CreateProduct(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    try {
        // parse request body to extract product data
        const product = await request.json();

        // Create the product using the productService
        const createdProduct = await productService.create(product);

        return {
            status: 201,
            jsonBody: createdProduct
        };

    } catch (error: unknown) {
        const err = error as Error;
        context.error(`Error creating product: ${err.message}`);

        return {
            status: 500,
            jsonBody: {
                error: "Failed to create product",
            }
        };
    }
};