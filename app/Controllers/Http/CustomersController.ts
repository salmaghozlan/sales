import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CustomersController {
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await Customer.findOrFail(id);
        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result =await Customer.all();
        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
       
        const newSchema = schema.create({
            user_id: schema.number(),
           
        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var customer = new Customer();
        customer.userId = fields.user_id;
        
        var result = await customer.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var customer = await Customer.findOrFail(id);
        customer.userId = fields.user_id;
      
        var result = await customer.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var customer = await Customer.findOrFail(id);
        await customer.delete();
        return { message: "The customer has been deleted!" };
    }
}
