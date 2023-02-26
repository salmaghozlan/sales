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
        const page = ctx.request.input('page', 1)
        const limit = 10
        
        const orders = await Order.query().paginate(page, limit);
        console.log(orders)
        return orders;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            customer_name: schema.string(),
            order_status : schema.number(),
            store_id : schema.number(),
            staff_id : schema.number(),
            
        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var order = new Order();
        order.customerName = fields.customer_name;
        order.orderStatus = fields.order_status;
        order.storeId = fields.store_id;
        order.staffId = fields.staff_id;
        var result = await order.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var order = await Order.findOrFail(id);
        order.customerName = fields.customer_name;
        order.orderStatus = fields.order_status;
        order.storeId = fields.store_id;
        order.staffId = fields.staff_id;
        
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
