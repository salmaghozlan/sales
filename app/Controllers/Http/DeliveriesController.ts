import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Delivery from 'App/Models/Delivery';

export default class DeliveriesController {
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await Delivery.findOrFail(id);
        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result =await Delivery.all();
        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
       
        const newSchema = schema.create({
            driver_id: schema.number(),
            customer_id: schema.number(),
            order_id: schema.number(),
            status: schema.string(),
        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var delivery = new Delivery();
        delivery.driverId = fields.driver_id;
        delivery.customerId = fields.customer_id;
        delivery.orderId = fields.order_id ;
        delivery.status = fields.status;
        var result = await delivery.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var delivery = await Delivery.findOrFail(id);
        delivery.driverId = fields.driver_id;
        delivery.customerId = fields.customer_id;
        delivery.orderId = fields.order_id ;
        delivery.status = fields.status;
        var result = await delivery.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var delivery = await Delivery.findOrFail(id);
        await delivery.delete();
        return { message: "The delivery has been deleted!" };
    }

}
