import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { Database } from '@adonisjs/lucid/build/src/Database';

export default class OrdersController {
 
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await Order.findOrFail(id);
        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result =await Order.all();
        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
       
        const newSchema = schema.create({
            customer_id:schema.number(),
            order_date:schema.date(),
            required_date:schema.date(),
            shipped_date:schema.date(),
            comments:schema.string(),
            coupon_id:schema.number(),
            status:schema.string(),
           

        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var order = new Order();
        order.customerId = fields.customer_id;
        order.orderDate=fields.order_date;
        order.requiredDate = fields.required_date;
        order.shippedDate = fields.shipped_date;
        order.comments = fields.comments;
        order.couponId = fields.coupon_id;
        order.status = fields.status;
       
        var result = await order.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var order = await Order.findOrFail(id);
        order.customerId = fields.customer_id;
        order.orderDate=fields.order_date;
        order.requiredDate = fields.required_date;
        order.shippedDate = fields.shipped_date;
        order.comments = fields.comments;
        order.couponId = fields.coupon_id;
        order.status = fields.status;
        var result = await order.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var order = await Order.findOrFail(id);
        await order.delete();
        return { message: "The order has been deleted!" };
    }
}
