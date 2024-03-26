import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import productService from "../services/product.services";

export async function DeleteProduct(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    try {
        // Extract product id and brand name from the request
        const id: string = request.params.id;
        const body = await request.json();
        const brand = JSON.stringify(body);
        const brandName = JSON.parse(brand).brand.name;

        // Delete the product using the productService
        const deletedProduct = await productService.delete(id, brandName);

        return {
            status: 200,
            jsonBody: {
                deletedProduct
            },
        };
        
    } catch (error: unknown) {
        const err = error as Error;
        context.error(`Error deleting product: ${err.message}`);

        return {
            status: 500,
            jsonBody: {
                error: "Failed to delete product",
            },
        };
    }
};