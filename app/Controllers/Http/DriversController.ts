import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Driver from 'App/Models/Driver';

export default class DriversController {
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await Driver.findOrFail(id);
        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result =await Driver.all();
        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
       
        const newSchema = schema.create({
            user_id: schema.number(),
            availability : schema.boolean(),
            performance : schema.number(),

        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var driver = new Driver();
        driver.userId = fields.user_id;
        driver.availability = fields.availability;
        driver.performance = fields.performance;
        var result = await driver.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var driver = await Driver.findOrFail(id);
        driver.userId = fields.user_id;
        driver.availability = fields.availability;
        driver.performance = fields.performance;
        var result = await driver.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var driver = await Driver.findOrFail(id);
        await driver.delete();
        return { message: "The driver has been deleted!" };
    }

}
