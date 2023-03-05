import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cart from 'App/Models/Cart';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class CartsController {
    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result =await Cart.findOrFail(id);
        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var result =await Cart.all();
        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        const newSchema = schema.create({
            order_id: schema.number(),
            product_id:schema.number(),
            quantity :schema.number(),

        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var cart = new Cart();
        cart.orderId = fields.order_id;
        cart.productId = fields.product_id;
        cart.quantity = fields.quantity;
        var result = await cart.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        var id = fields.id;       
        var cart = await Cart.findOrFail(id);
        cart.orderId = fields.order_id;
        cart.productId = fields.product_id;
        cart.quantity = fields.quantity;
        var result = await cart.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var cart = await Cart.findOrFail(id);
        await cart.delete();
        return { message: "The cart has been deleted!" };
    }
}
