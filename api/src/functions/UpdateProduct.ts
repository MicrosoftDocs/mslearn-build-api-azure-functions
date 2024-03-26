import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import productService from "../services/product.services";

export async function UpdateProduct(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    try {
        // Parse request body to extract product data
        const product = await request.json();

        // Update the product using the productService
        const udpatedProduct = await productService.update(product);

        return {
            status: 200,
            jsonBody: {
                udpatedProduct
            }
        };

    } catch (error: unknown) {
        const err = error as Error;
        context.error(`Error updating product: ${err.message}`);

        return {
            status: 500,
            jsonBody: {
                error: "Failed to update product",
            }
        };
    }
};