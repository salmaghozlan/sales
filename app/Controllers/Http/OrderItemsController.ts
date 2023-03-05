import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Order from 'App/Models/Order';
import OrderItem from 'App/Models/OrderItem';


export default class OrderItemsController {
    
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await OrderItem.findOrFail(id);
        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result =await OrderItem.all();
        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
       
        const newSchema = schema.create({
            product_id:schema.number(),
            quantity:schema.number(),
            price:schema.number(),

        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var orderItem = new OrderItem();
        orderItem.productId = fields.product_id;
        orderItem.quantity = fields.quantity;
        orderItem.price = fields.price;
        var result = await orderItem.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var orderItem = await OrderItem.findOrFail(id);
        orderItem.productId = fields.product_id;
        orderItem.quantity = fields.quantity;
        orderItem.price = fields.price;
        var result = await orderItem.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var orderItem = await OrderItem.findOrFail(id);
        await orderItem.delete();
        return { message: "The order item has been deleted!" };
    }
}
